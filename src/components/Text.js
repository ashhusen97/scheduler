/* eslint-disable prettier/prettier */
// just copy this code from the driving repo :)
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      buttonText,
      title,
      body,
      caption,
      small,
      sentence,
      size,
      justifyCenter,
      alignCenter,
      transform,
      align,
      // styling
      fontFamily,
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      buttonText && styles.buttonText,
      justifyCenter && styles.justifyCenter,
      alignCenter && styles.alignCenter,
      black && styles.black,
      sentence && styles.sentence,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && {fontSize: size},
      transform && {textTransform: transform},
      align && {textAlign: align},
      height && {lineHeight: height},
      spacing && {letterSpacing: spacing},
      weight && {fontWeight: weight},
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      fontFamily && {fontFamily: fontFamily},
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && {color},
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      style, // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  // variations
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '200',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  // accent: {color: theme.colors.accent},
  // primary: {color: theme.colors.primary},
  // secondary: {color: theme.colors.secondary},
  // tertiary: {color: theme.colors.tertiary},
  // black: {color: theme.colors.black},
  // white: {color: theme.colors.white},
  // gray: {color: theme.colors.gray},
  // gray2: {color: theme.colors.gray2},
  // // fonts
  h1: {fontSize: 40},
  h2: {fontSize: 36},
  h3: {fontSize: 32},
  title: {fontSize: 50},
  small: {fontSize: 20},
  black: {
    color: 'black',
  },
  gray: {
    color: 'gray',
  },
  sentence: {
    textTransform: 'capitalize',
  },
  buttonText: {
    fontSize: 12,
  },
  // body: theme.fonts.body,
  // caption: theme.fonts.caption,
  // small: theme.fonts.small,
});
