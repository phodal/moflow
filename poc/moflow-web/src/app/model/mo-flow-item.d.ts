export interface MoFlowBlock {
  type?: "card" | "molist" | any
  content: {
    title?: string,
    subtitle?: string,
    content?: string,
    styles?: any,
    src?: string,
    items?: Array<any>,
  },
}

export interface MoFlowItem {
  id: number,
  style?: string,
  blocks: Array<MoFlowBlock>
}
