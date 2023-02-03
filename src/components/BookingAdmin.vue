<script>
export default {
    name: 'BookingAdmin',
    data() {
        return {
            bookings: [],
            statusUpdate: ""
        }
    },

    methods:
    {
        update(event) {
            let key = event.srcElement.dataset.key;
            let status = event.srcElement.id;

            // if clicked booking status is pending then change to approved else change to pending (so if the status is approved then this will change to pending)
            (status == 'pending') ? this.statusUpdate = 'approved' : this.statusUpdate = 'pending';

            let reload = () => { this.fetcher(); }

            firebase.database().ref('agendamento').child(key).update(
                {
                    status: this.statusUpdate
                }, function (error) {

                    if (!error) {
                        reload();
                    }

                });
        },

        fetcher() {
            this.$router.get('https://agendamento-4980a-default-rtdb.firebaseio.com/agendamento.json')
                .then(function (data) {

                    return data.json();
                })
                .then(function (data) {
                    let requests = [];
                    for (let key in data) {

                        data[key].unique = key; //adding the property (unique) in every object & assigning the value of objects, key

                        requests.push(data[key]);
                    }
                    this.bookings = requests;
                })
        }
    },

    created() {
        this.fetcher();
    }
}

</script>

<template>
    <div>
        <table class="pending">
            <thead>
                <tr>
                    <th>Dates</th>
                    <th>Timing</th>
                    <th>Names</th>
                    <th>Contact Numbers</th>
                    <th>Status</th>
                    <th>Updates</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" v-show="booking.status == 'pending'">
                    <td>{{ booking.date }}</td>
                    <td>{{ booking.time }}</td>
                    <td>{{ booking.customerName }}</td>
                    <td>{{ booking.customerNumber }}</td>
                    <td>{{ booking.status }}</td>
                    <td>
                        <a href="javascript:;">
                            <i @click="update" :data-key=booking.unique :id=booking.status
                                class="material-icons">autorenew</i></a>
                    </td>
                </tr>
            </tbody>
        </table>

        <br>
        <hr class="hrth"><br>

        <table class="approved">
            <thead>
                <tr>
                    <th>Dates</th>
                    <th>Timing</th>
                    <th>Names</th>
                    <th>Contact Numbers</th>
                    <th>Status</th>
                    <th>Updates</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" v-show="booking.status == 'approved'">
                    <td>{{ booking.date }}</td>
                    <td>{{ booking.time }}</td>
                    <td>{{ booking.customerName }}</td>
                    <td>{{ booking.customerNumber }}</td>
                    <td>{{ booking.status }}</td>
                    <td>
                        <a href="javascript:;">
                            <i @click="update" :data-key=booking.unique :id=booking.status
                                class="material-icons">autorenew</i></a>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
