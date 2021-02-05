import { Button, Color } from '../../styles/theme'
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const AlphaSlider = withStyles({
    root: {
        height: 8
    },
    thumb: {
        height: 16,
        width: 16,
        backgroundColor: "#fff",
        border: "2px solid " + Color.theme.selectedPrimary,
        marginTop: -4,
        marginLeft: -8,
        "&:focus, &:hover, &$active": {
          boxShadow: "inherit"
        }
      },
      active: {
      },
      track: {
        height: 8,
        borderRadius: 4,
        color: Color.theme.selectedSecondary,
      },
      rail: {
        height: 8,
        borderRadius: 4,
        color: Color.theme.primary,
      },
      mark: {
        height: '4px',
        visibility: 'hidden',
      },
      markActive: {
        visibility: 'visible',
        backgroundColor: Color.theme.selectedPrimary,
      },
      markLabel: {
        fontSize: '12px',
      }
})(Slider);