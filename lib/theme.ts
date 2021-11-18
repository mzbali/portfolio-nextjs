import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const style = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#f2e4d0', '#202023')(props) //#f0e7db
    }
  })
};

const components = {
  Heading: {
    variants: {
      'second-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThikness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
};

const colors = {
  glassTeal: '#88ccca'
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  style,
  components,
  colors,
  fonts
});

export default theme;
