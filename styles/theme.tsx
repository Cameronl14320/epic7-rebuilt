export const Color = {
    theme: {
        primary: 'black',
        secondary: 'white',
        primarybeta: 'darkgray',
        secondarybeta: 'silver',
        selected: 'gold',
    }
}

export const Button = {
    padding: '5px',
    mx: '5px',
    borderRadius: '5px',
    ":checked": {
        boxShadow: "0 0 0 3px " + Color.theme.selected,
        borderRadius: ['5px', '4px', '3px']
    }
}