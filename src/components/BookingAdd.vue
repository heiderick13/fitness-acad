<script>
export default {
    name: 'BookingAdd',
    props: ["id"],
    data() {
        return {
            afterSubmit: false,
            customerName: "",
            customerNumber: "",
            dateSelected: 'notselected',
            date: '',
            bookedTime: [],
            allTime: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
            validationName: false,
            validationDate: false,
            validationTime: false
        }
    },

    methods:
    {
        checkDate() {
            this.date = document.getElementsByClassName('datepicker')[0].value;
            if (this.date) {
                this.dateSelected = 'selected';
                // Fetching bookings avaiability
                this.$router.get('https://agendamento-4980a-default-rtdb.firebaseio.com/agendamento.json')
                    .then(function (data) {

                        let savedData = Object.values(data.body);
                        for (let x = 0; x < savedData.length; x++) {

                            if (savedData[x].date == this.date) {

                                this.bookedTime.push(parseInt(savedData[x].time));
                            }
                        }
                        console.log(this.bookedTime);
                    });
            }
            else {
                this.notification('first-noti');
            }
        },

        post() {

            let time = document.getElementsByClassName('time')[0].value;
            this.checkDate();

            (!this.date) ? this.notification('second-noti') : this.validationDate = true;
            (!time) ? this.notification('third-noti') : this.validationTime = true;
            (!this.customerName) ? this.notification('last-noti') : this.validationName = true;

            if (this.validationDate == true & this.validationName == true & this.validationTime == true) {

                this.$router.post('https://agendamento-4980a-default-rtdb.firebaseio.com/agendamento.json', {
                    "customerName": this.customerName,
                    "customerNumber": this.customerNumber,
                    "date": this.date,
                    "time": time,
                    "status": "pending"
                })
                    .then(function () {

                        this.afterSubmit = true;

                    });
            }
        },

        notification(element) {
            document.getElementsByClassName(element)[0].style.display = "block";

            setTimeout(function () {
                document.getElementsByClassName(element)[0].style.display = "none";
            }, 5000)
        }
    },


    directives: ('check', {

        update(el, binding, vnode) {
            let time = parseInt(el.innerHTML);
            let check = vnode.context.bookedTime.includes(time);

            if (check) {
                el.disabled = true;
                el.style.color = "red";
                el.innerHTML = el.innerHTML + "Not Available"
            }
            else {
                el.disabled = false;
                el.style.color = "green";
                el.style.fontSize = "1.2rem";
            }
        }

    })
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    //limiting the date
    var instances = M.Datepicker.init(elems, { minDate: new Date() });
});
</script>

<template>

    `<div :class="'booking ' + id">
        <h1 v-if="afterSubmit" class="notifications">We Have Received Your Request Successfully !</h1>
        <span class="notifications first-noti">Please, Select a date before selecting time</span>
        <span class="notifications second-noti">please, select a date before submitting request</span>
        <span class="notifications third-noti">please, select time before submitting request</span>
        <span class="notifications last-noti">please, write your name before submitting request</span>

        <div v-if="!afterSubmit">
            <form v-on:submit.prevent>
                <div class="input-field">
                    <input id="last_name" type="text" class="validate" v-model="customerName">
                    <label for="last_name" class="customerinfo">Seu nome</label>
                </div>

                <div class="input-field">
                    <input id="phone" type="text" class="validate" v-model="customerNumber">
                    <label for="phone" class="customerinfo">Seu telefone</label>
                </div>

                <input type="text" class="datepicker" placeholder="Escolha a data">
                <div class="select-time" @click="checkDate">Veja as horas vagas</div>
                <select class="browser-default time" v-show="dateSelected == 'selected'">
                    <option value="">Escolha a hora</option>
                    <option v-check v-for="time in allTime" :key="time" :value="time">{{ time }}</option>
                </select>
                <hr>

                <button @click="post" class="btn" type="submit" name="action">
                    <i class="material-icons right"></i>
                    Enviar
                </button>
            </form>
        </div>
    </div>`
</template>

<style scoped>
.booking {
    text-align: center;
    max-width: 700px;
    padding: 50px 0;
}

.customerinfo {
    text-align: left;
    font-size: 1rem;
    color: var(--primary);
}

#last_name,
#phone {
    font-size: 1.2rem;
    color: var(--primary);
}

.datepicker {
    color: var(--primary);
    font-size: 2rem;
}

.datepicker-date-display {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), #930404);
}

.datepicker-table td.is-selected {
    background: #840808;
}

.datepicker-cancel,
.datepicker-clear,
.datepicker-today,
.datepicker-done {

    color: #840808;
}

.select-time:hover {
    cursor: pointer;
}

.select-time {
    font-size: 1rem;
    color: var(--primary);
    text-align: left;
    padding-top: 10px;
}

.btn {
    margin-top: 10px;
}

.notifications {
    color: whitesmoke;
    font-size: 1.6rem;
    background: red;
    padding: 12px;
    border-radius: 20px;
    position: absolute;
    top: 175px;
    right: 20px;
    display: none;
}
</style>