import { reactive } from "vue";

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
    games: [
        {
            id: 0,
            name: "Blackjack",
            desc: "Blablabla 21 blablabla",
            icon: "../assets/icons/add.png"
        },
        {
            id: 1,
            name: "Roulette",
            desc: "Roulette roulette roulette roulette",
            icon: "assets/icons/add.png"
        },
        {
            id: 1,
            name: "Machine à sous",
            desc: "Roulette roulette roulette roulette",
            icon: "assets/icons/add.png"
        },
    ]
})