import Headersection from './Herosection'
import Statistics from './Statistics'
import PolymorphicCodeEngine from './PolyMorphicCodeEngine'
import { PolyMorphicCodeEninginWork } from './PolyMorphicCodeEninginWork'
import BoxWithContent from './BoxWithContent'

function Home () {
    return (
     <div>
        <Headersection/>
        <Statistics/>
        <PolymorphicCodeEngine/>
        <PolyMorphicCodeEninginWork/>
        <BoxWithContent/>
     </div>
    )
}
export default Home;