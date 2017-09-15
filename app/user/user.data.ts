export interface IUserVO {
    id:string,
    name:string,
    desc: string,
    pos: string,
    mail: string,
    phone:string,
    image:string
}

export var userData: IUserVO[] = [
    {
        id: 'at',
        name: 'Alexander Tschakarov',
        desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        pos: 'DEV/CEO',
        mail: 'design@alexander-tschakarov.de',
        phone: '030-3456789',
        image: 'http://lorempixel.com/output/people-q-g-700-500-9.jpg'

    },
    {
        id: 'mt',
        name: 'Mirja Tschakarov',
        desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        pos: 'DEV/CEO',
        mail: 'design@mirja-tschakarov.de',
        phone: '030-3456789',
        image: 'http://lorempixel.com/output/people-q-g-700-500-3.jpg'

    },
    {
        id: 'mm',
        name: 'Max Mustermann',
        desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        pos: 'UX/CEO',
        mail: 'design@max-mustermann.de',
        phone: '030-3456789',
        image: 'http://lorempixel.com/output/people-q-g-700-500-2.jpg'

    }
]
