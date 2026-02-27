import { reactive } from "vue";
import blackjackIcon from "@/assets/img/bj.png"
import rouletteIcon from "@/assets/img/roulette.png"
import machineIcon from "@/assets/img/machine.png"
import router from "@/router";

import { useStorage } from '@vueuse/core'

export const store = useStorage("store",{
    sessions: [],
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
            id: 2,
            name: "MACHINE À SOUS",
            desc: "Roulette roulette roulette roulette",
            icon: machineIcon
        },
    ]
})

export const addSession = (duration,start,end,gameId) => {
        const newId = new Date().getTime()
        console.log("New id :", newId)
        store.value.sessions.push({
            duration: duration,
            start: start,
            end: end,
            gameId: gameId,
            timeStamp: new Date().getTime(),
            id: newId
        })
    router.push('/')
}

export const deleteSession = (sessionId) => {
    //Récupérer l'objet
    const session = store.value.sessions.find(item => item.id === sessionId)

    //Récupérer l'index
    const index = store.value.sessions.indexOf(session)

    store.value.sessions.splice(index,1)

    router.push('/')
}

export const saveSession = (time,start,end,gameId,sessionId) => {
    const session = store.value.sessions.find(item => item.id === sessionId)

    session.duration = time
    session.start = start
    session.end = end
    session.gameId = gameId

    router.push('/')
}
