// Type definitions for @rimiti/react-native-toastify v1.0.0
// Project: @rimiti/react-native-toastify
// Definitions by: Jules Samuel Randolph <https://github.com/jsamr>
//                 Dimitri DO BAIRRO <https://github.com/rimiti>

import { Component } from 'react'
import { ViewProps, StyleProp, TextProps } from 'react-native'

export interface ToastProps {
  /**
   * Style definitions for the global element.
   */
  style?: StyleProp<ViewProps>
  /**
   * Toast position.
   */
  position?: 'top' | 'center' | 'bottom'
  /**
   * Style definitions for the toast text element.
   */
  textStyle?: StyleProp<TextProps>
  /**
   * Position value of toast.
   * An offset used with top and bottom positions.
   */
  positionValue?: number
  /**
   * Duration of fade in.
   */
  fadeInDuration?: number
  /**
   * Duration of fade out.
   */
  fadeOutDuration?: number
  /**
   * Opacity value.
   */
  opacity?: number
  /**
   * Default duration.
   */
  durationShort?: number
  /**
   * Close delay duration.
   */
  defaultCloseDelay?: number
  /**
   * End value of animation.
   */
  end?: number
}

declare class Toast extends Component<ToastProps> {
  public show(text: string, duration?: number): void
  /**
   *
   * @param delay The delay after which the toast shall be closed.
   */
  public close(delay: number): void
  /**
   *  @returns The position from top edge.
   */
  public position(): number
}

export default Toast
