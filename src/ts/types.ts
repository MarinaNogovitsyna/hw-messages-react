export interface Name {
    name: string
}

// export interface MessageText {
//     text?: string
// }

export default interface MessageType {
    id: string,
    from: Name,
    type: string,
    time: string,
    text?: string
}
