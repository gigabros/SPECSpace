import axios from "./axios";
const get_data = (id) => {
    return axios.get('/profile/'+id)
        .then(res => {
            console.log(res)
            sessionStorage.setItem('name', res.data.name)
            sessionStorage.setItem('lvl', res.data.lvl)
            sessionStorage.setItem('points', res.data.points)
        }).then(
            axios.get('/get_finished/' + id)
                .then(finished => {
                    console.log(finished['data']['data'][0]['count(*)'])
                    sessionStorage.setItem('finished',finished['data']['data'][0]['count(*)'])
                })
                .then(
                    axios.get('/get_submitted/' + id)
                        .then(submits => {
                            console.log(submits['data']['payload']['data'][0]['count(*)'])
                            sessionStorage.setItem('submitted', submits['data']['payload']['data'][0]['count(*)'])
                        })
                )
        )

    // return console.log(id)
}

export default get_data