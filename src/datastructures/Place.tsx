import { LatLng } from 'react-native-maps'

class Place {
    pos: LatLng
    name: string
    time: number

    constructor(pos: LatLng, name: string, time: number) {
        this.pos = pos
        this.name = name
        this.time = time
    }
}

export default Place