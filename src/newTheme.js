//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createMuiTheme } from '@material-ui/core/styles';

// const newTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//     text: {
//       primary: '#FFF',
//     },
//     background: {
//       default: '#121212',
//       paper: 'rgba(255, 255, 255, 0.9)',
//     },
//     primary: {
//       light: '#757ce8',
//       main: '#571EB1',
//       dark: '#c42a03',
//       contrastText: '#000',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//     action: {
//       disabledBackground: '#CDCDCD',
//       active: '#000',
//       hover: '#000',
//     },
//   },
//   typography: {
//     color: '#c42a03',
//     fontFamily: ['"IBM Plex Mono"', 'monospace'].join(','),
//   },
// });

const newTheme = createMuiTheme({
    palette: {
        type: 'dark',
        text: {
            primary: '#E6E9EE',
        },
        background: {
            default: 'transparent',
            paper: 'transparent',
        },
        primary: {
            light: '#757CE8',
            main: '#571EB1',
            dark: '#571EB1',
            contrastText: '#16191E',
        },
        secondary: {
            light: '#757CE8',
            main: '#757CE8',
            dark: '#757CE8',
            contrastText: '#000',
        },
        action: {
            disabledBackground: '#852320f7 !important',
            active: '#000',
            hover: '#000',
        },
    },
    typography: {
        color: '#E6E9EE',
        fontFamily: ['"Gilroy"', 'sans-serif'].join(','),
    },
    components: {
        MuiButton: {
            variants: [{
                props: { variant: "standard" },
                style: {
                    border: "1px solid var(--white)"
                }
            }]
        }
    }
});

export default newTheme;