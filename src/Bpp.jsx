import { defineComponent } from 'vue'
import styled from 'vue3-styled-components'

const BppWrapper = styled.div`
  font-size: 18px;
  font-weight: 700;
`

const Bpp = defineComponent({
  props: {
    name: String
  },
  setup(props, { attrs }) {
    console.log('Bpp1', attrs);
    console.log('Bpp2', props.name);
    return () => {
      return (
        <BppWrapper>888</BppWrapper>
      )
    }
  }
})

export default Bpp

