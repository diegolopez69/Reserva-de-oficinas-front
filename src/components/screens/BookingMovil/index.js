import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Select, FormControl, InputLabel, MenuItem, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './index.scss'

export const BookingMovil = () => {
    const hours = [
        '07:00', //0
        '07:30', //1
        '08:00', //2
        '08:30',
        '09:00', //4
        '09:30',
        '10:00', //6
        '10:30',
        '11:00', //8     -> entrada  + (entrada + 6) >= horas de finalización
        '11:30', //      -> entrada < horas de finalización >= (entrada + 6)
        '12:00', //10
        '12:30',
        '13:00', //12
        '13:30',
        '14:00', //14
        '14:30',
        '15:00', //16
        '15:30',
        '16:00', //18
        '16:30',
        '17:00', //20
        '17:30',
        '18:00', //22
        '18:30',
        '19:00', //24
        '19:30',
        '20:00', //26
        '20:30',
        '21:00', //28
        '21:30',
    ]

    const [value, setValue] = useState('')
    const [valuee, setValuee] = useState('')
    const [textInput, setTextInput] = useState('')
    const handleChange = e => setValue(e.target.value)
    const handleChangeOut = e => setValuee(e.target.value)
    const handleTextInputChange = event => {
        setTextInput(event.target.value)
    }
    const create_by = localStorage.getItem('name')
    const PostMethod = () => {
        const { REACT_APP_API_URL } = process.env
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ start_time: value, end_time: valuee, room_id:1, create_by:"admin", name:"Titulo 1", description:"ejemplo1@alumnos.uneatlantico.es" })
            body: JSON.stringify({
                reserva: {
                    start_time: Time(hours[value]),
                    end_time: Time(filterFinishHours()[valuee]),
                    room_id: 1,
                    create_by: create_by,
                    name: textInput,
                    description: 'ejemplo1@alumnos.uneatlantico.es',
                },
            }),
        }

        console.log(requestOptions.body)
        fetch(`http://172.27.19.48:31108/links/aceptar_reserva`, requestOptions)
            .then(data => {
                setValue(data.id)
                // console.log("data", data);
                // console.log("data.status", data.status);
                RouteChange(data.status)
            })
            .catch(exception => console.error(exception))
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }

    const history = useHistory()
    const RouteChange = data => {
        history.push('/bookingFinished', { res: data })
    }

    //2022-01-25T12:00:00
    function Time(time) {
        if (!time) return ''

        const tiempo = time.split(':')
        let today = new Date()
        today.setHours(tiempo[0])
        today.setMinutes(tiempo[1])
        today.setSeconds(0)
        let month = today.getMonth() + 1
        let date = today.getDate()
        let hour = today.getHours() + 1
        let minute = today.getMinutes()

        if (month === 1) {
            month = `0` + 1
        } else if (month === 2) {
            month = `0` + 2
        } else if (month === 3) {
            month = `0` + 3
        } else if (month === 4) {
            month = `0` + 4
        } else if (month === 5) {
            month = `0` + 5
        } else if (month === 6) {
            month = `0` + 6
        } else if (month === 7) {
            month = `0` + 7
        } else if (month === 8) {
            month = `0` + 8
        } else if (month === 9) {
            month = `0` + 9
        } else if (month === 10) {
            month = 10
        } else if (month === 11) {
            month = 11
        } else if (month === 12) {
            month = 12
        }

        if (date === 1) {
            date = `0` + 1
        } else if (date === 2) {
            date = `0` + 2
        } else if (date === 3) {
            date = `0` + 3
        } else if (date === 4) {
            date = `0` + 4
        } else if (date === 5) {
            date = `0` + 5
        } else if (date === 6) {
            date = `0` + 6
        } else if (date === 7) {
            date = `0` + 7
        } else if (date === 8) {
            date = `0` + 8
        } else if (date === 9) {
            date = `0` + 9
        }

        if (hour === 7) {
            hour = `0` + 7
        } else if (hour === 8) {
            hour = `0` + 8
        } else if (hour === 9) {
            hour = `0` + 9
        }

        if (minute === 0) {
            minute = `00`
        }

        return `${today.getFullYear()}-${month}-${date}T${hour}:${minute}:0${today.getSeconds()}`
    }

    //entrada < horas de finalización >= (entrada + 6)
    // hours.map((hour, index) => console.log("hour", index))
    const filterFinishHours = () => {
        if (!value && value !== 0) return []
        return hours.filter((_, index) => index > +value && index <= value + 6)
    }

    return (
        <div className='MainScreenBookingMovile'>
            <div className='GeneralHeaderOfBookingMovil'>
                <p className='TextOfHeader'>Reserva</p>
            </div>
            <div className='GeneralFormOfBookingMovil'>
                <div className='FormName'>
                    <p className='TextOfNameOnForm'>{localStorage.getItem('name')}</p>
                    {/* <p className="TextOfNameOnForm">{localStorage.getItem("response")}</p> */}
                </div>
                <div className='InsideForm'>
                    <form className='LabelForm'>
                        <label>Aula: </label>
                        <label>2.1</label>
                    </form>

                    <form className='LabelForm'>
                        <label>Correo: </label>
                        <label>{localStorage.getItem('email')}</label>
                    </form>

                    <form className='LabelForm'>
                        <TextField
                            className='FormControl'
                            label='Motivo de la reserva'
                            value={textInput}
                            onChange={handleTextInputChange}
                        />
                    </form>

                    <form className='LabelForm'>
                        <FormControl className='FormControl'>
                            <InputLabel>Hora de entrada: </InputLabel>
                            <Select onChange={handleChange}>
                                {hours.map((hour, index) => (
                                    <MenuItem key={index} value={index}>
                                        {hour}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <p>Entrada: {hours[value]}</p>
                        {/* {Time(hours[value])} */}
                    </form>

                    <form className='LabelForm'>
                        <FormControl className='FormControl'>
                            <InputLabel>Hora de Salida: </InputLabel>
                            <Select disabled={!value && value !== 0} onChange={handleChangeOut}>
                                {filterFinishHours().map((hour, index) => (
                                    <MenuItem key={index} value={index}>
                                        {hour}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <p>Salida: {filterFinishHours()[valuee]}</p>

                        {/* {Time(filterFinishHours()[valuee])} */}
                    </form>
                </div>

                <div className='BtnToBooking'>
                    <Button
                        className='BtnReservar'
                        onClick={() => {
                            PostMethod()
                        }}
                    >
                        Reservar
                    </Button>
                </div>
            </div>
        </div>
    )
}
