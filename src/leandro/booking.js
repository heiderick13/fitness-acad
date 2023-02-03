Vue.component('booking',
    {
        props: ["id"],
        template: `<div :class="'booking ' + id">
                    <h1 v-if="afterSubmit" class="">We Have Received Your Request Successfully !</h1>
                    <span class="first-noti">Please, Select a date before selecting time</span>
                    <span class="second-noti">please, select a date before submitting request</span>
                    <span class="third-noti">please, select time before submitting request</span>
                    <span class="last-noti">please, write your name before submitting request</span>

                    <div v-if="!afterSubmit">
                        <form v-on:submit.prevent>
                            <div class="input-field">
                                <input id="last_name" type="text" class="validate" v-model="customerName">
                                <label for="last_name" class="customerinfo">Your Name</label>
                            </div>
                            <div class="input-field">
                                <input id="phone" type="text" class="validate" v-model="customerNumber">
                                <label for="phone" class="customerinfo">Your Contact phone</label>
                            </div>

                            <input type="text" class="datepicker" placeholder="Pick a date">
                            <div class="select-time" @click="checkDate">See Available Time</div>
                            <select class="time" v-show="dateSelected == 'selected'">
                                <option value="">Select Time</option>
                                <option v-check v-for="time in allTime" :value="time">{{ time }}</option>
                            </select>
                            <hr>

                            <button @click="post" class="btn" type="submit" name="action">
                            <i class="material-icons right">send</i>
                            Submit
                            </button>
                        </form>
                    </div>  
                </div>`,

        data() {
            return {
                afterSubmit: false,
                customerName: "",
                customerNumber: "",
                dateSelected: 'notselected',
                date: '',
                bookedTime: [],
                allTime: [07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
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
                    this.$http.get('https://agendamento-4980a-default-rtdb.firebaseio.com/agendamento.json')
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

                    this.$http.post('https://agendamento-4980a-default-rtdb.firebaseio.com/agendamento.json', {
                        "customerName": this.customerName,
                        "customerNumber": this.customerNumber,
                        "date": this.date,
                        "time": time,
                        "status": "pending"
                    })
                        .then(function (data) {

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
        }
    });

Vue.directive('check', {

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

});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    //limiting the date
    var instances = M.Datepicker.init(elems, { minDate: new Date() });
});