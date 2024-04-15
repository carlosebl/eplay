import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://via.placeholder.com/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      voluptatibus ratione sit fugit sint a esse officia illo consequuntur,
      dolore quas reiciendis eos corporis animi soluta suscipit! Impedit, atque
      odit!
    </Descricao>
  </Card>
)

export default Product
