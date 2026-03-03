<script setup>
    import { computed } from 'vue';
    import { store } from '@/store';

    const props = defineProps(['bigNumber','corps','icon','class','mini','chart'])

    //Graphique
    import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
    import { Line } from 'vue-chartjs'
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

    //Générer les données du graphique
    const chartData = computed(() => {
        const chronologicSessions = [...store.value.sessions].sort((a, b) => a.timeStamp - b.timeStamp)
        return {
        labels: chronologicSessions.map((session, index) => `S${index + 1}`),
        datasets: [
            {
            label: 'Gains',
            data: chronologicSessions.map(session => session.end - session.start),
            borderColor: '#fff',
            borderWidth: 3,
            pointBackgroundColor: '#fff',
            pointRadius: 4,
            tension: 0.4
            }
        ]
        }
    })

    //Style dy graphique
    const chartStyle = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
        legend: { display: false }
        },
        scales: {
        x: {
            grid: { display: false },
            ticks: { color: '#fff' }
        },
        y: {
            grid: { color: 'rgba(202, 202, 202, 0.1)' },
            ticks: { color: '#fff' }
        }
        }
    }

</script>

<template>
    <div class="statCard" :class="class"  v-if="!chart">
        <img :src="icon" alt="" v-if="icon">
        <p id="bigNumber" v-if="!icon">{{ bigNumber }}</p>
        <p>{{corps}}</p>
    </div>
    <div v-if="chart" class="chart-container">
        <Line :data="chartData" :options="chartStyle" />
    </div>
</template>

<style scoped>

    .chart-container {
        width: 100%;
        padding: 15px;
        border-radius: 20px;

        border: solid 2px #CACACA;
        border-radius: 40px;
        height: 220px;
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding: 20px 20px;
        background: linear-gradient(220deg,rgba(11, 22, 42, 1) 32%, rgba(11, 22, 42, 1) 46%, rgb(248, 72, 41));
    }

    .statCard {
        border: solid 2px #CACACA;
        border-radius: 40px;
        height: 220px;
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding: 15px 20px;
    }

    .statCard img {
        height: 105px;
        width: auto;
    }

    .mini {
        background: linear-gradient(220deg,rgba(11, 22, 42, 1) 32%, rgba(11, 22, 42, 1) 46%, rgb(210, 146, 28));
        width: 45%;
    }

    .big {
        background: linear-gradient(220deg,rgba(11, 22, 42, 1) 32%, rgba(11, 22, 42, 1) 46%, rgb(248, 72, 41));
    }

    .statCard p {
        margin: 0;
        color: #fff;
    }

    #bigNumber {
        font-size: 70px;
    }

</style>