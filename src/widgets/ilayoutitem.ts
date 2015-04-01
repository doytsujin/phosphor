/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
module phosphor.panels {

/**
 * An object which manages an item in a layout.
 */
export
interface ILayoutItem {
  /**
   * Test whether the item manages a widget.
   */
  isWidget: boolean;

  /**
   * Test whether the item manages empty space.
   */
  isSpacer: boolean;

  /**
   * Test whether the item should be treated as hidden.
   */
  isHidden: boolean;

  /**
   * The widget the item manages, if any.
   */
  widget: Widget;

  /**
   * Test whether the item should be expanded horizontally.
   *
   * If this is true, the item will get as much space as possible
   * in the horizontal direction up to its maximum size.
   */
  expandHorizontal: boolean;

  /**
   * Test Whether the item should be expanded vertically.
   *
   * If this is true, the item will get as much space as possible
   * in the vertical direction up to its maximum size.
   */
  expandVertical: boolean;

  /**
   * The horizontal stretch factor for the item.
   */
  horizontalStretch: number;

  /**
   * The vertical stretch factor for the item.
   */
  verticalStretch: number;

  /**
   * Invalidate the cached data for the item.
   */
  invalidate(): void;

  /**
   * Compute the minimum allowed size of the item.
   */
  minSize(): Size;

  /**
   * Compute the maximum allowed size of the item.
   */
  maxSize(): Size;

  /**
   * Set the geometry rect of the item using the given values.
   */
  setRect(x: number, y: number, width: number, height: number): void;
}

} // module phosphor.panels
