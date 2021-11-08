export interface Planet {
    name: string,
    description: string,
    distance_unit: string,
    distance: number,
    time_unit: string,
    time: number,
    img_src: string
}

export interface Crew {
    function: string,
    name: string
    description: string,
    img_url: string
}

export interface Technology {
    subTitle: string,
    title: string,
    description: string,
    img_url: string
}