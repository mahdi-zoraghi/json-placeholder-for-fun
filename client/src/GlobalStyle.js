import { CssBaseline } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
 
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#f5f5f5",
        },
        a: {
          textDecoration: "none",
        },
      },
    },
  },
})

const GlobalStyle = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

export default GlobalStyle
