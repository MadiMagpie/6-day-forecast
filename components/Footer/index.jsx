import { Flex } from "components/Flex";
import { Typography } from "components/Typography";

export default function Footer(){
       return(
              <Flex padding = '0.5em 4.5em' width = '100vw' backgroundColor = '#1a170a' align = 'flex-end'>
                     <Typography  color = 'white' size = '0.5rem' weight = '300'text = 'Created with ❤️ and next.js by Madison Cafik-Irwin'/>
              </Flex>
       )
}
