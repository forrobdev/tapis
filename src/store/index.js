import { reactive } from "vue";
import blackjackIcon from "@/assets/img/bj.png"
import rouletteIcon from "@/assets/img/roulette.png"
import machineIcon from "@/assets/img/machine.png"

export const store = reactive({
    sessions: [
	    {
            duration: 10,
            amount: 999,
            win: true,
            gameId: 0,
            timeStamp: 87628762,
            id: 0
        }
    ],
    addSession() {
        const newId = this.sessions[this.sessions.length - 1].id + 1
        console.log("New id :", newId)
        this.sessions.push({
            duration: price.newDuration,
            amount: price.newPrice,
            win: price.newWin,
            timeStamp: Date.now(),
            id: newId
        })
    },
    games: [
        {
            id: 0,
            name: "BLACKJACK",
            desc: "Blablabla 21 blablabla",
            icon: blackjackIcon
        },
        {
            id: 1,
            name: "ROULETTE",
            desc: "Roulette roulette roulette roulette",
            icon: rouletteIcon
        },
        {
            id: 1,
            name: "MACHINE À SOUS",
            desc: "Roulette roulette roulette roulette",
            icon: machineIcon
        },
    ]
})

export const price = reactive({
    newPrice: "",
    newDuration: 19,
    newWin: true,
})