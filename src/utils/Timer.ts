export const TimerHelper = (end_offer: string)=>{
    const end_date = new Date(end_offer).getTime()
    const current_date = (new Date).getTime()

    const time_remaining = end_date - current_date
    const timer_object = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    if(time_remaining > 0){
        timer_object.days = Math.floor(time_remaining / (1000 * 60 * 60 * 24))
        timer_object.hours = Math.floor(time_remaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        timer_object.minutes = Math.floor(time_remaining % (1000 * 60 * 60) / (1000 * 60))
        timer_object.seconds = Math.floor(time_remaining % (1000 * 60) / 1000)
    }
    return timer_object
}