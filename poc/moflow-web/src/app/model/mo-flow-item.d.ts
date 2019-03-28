export interface MoFlowBlock {
  type?: "card" | ""
  content: {
    title?: string,
    subtitle?: string,
    content?: string,
    src?: string
  },
}

export interface MoFlowItem {
  id: number,
  style?: string,
  items: Array<MoFlowBlock>
}
