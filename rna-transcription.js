export function toRna(DNA){
    if (DNA == '')
        return '';
    if (DNA == 'C')
        return 'G'
    if (DNA == 'G')
        return 'C'
    return 'U'
}
