import Lesson from './Lesson'
import SidebarDetails from './SidebarDetails'

function Sidebar() {
    return (
        <SidebarDetails>
            <aside>
                <span>
                    Cronograma de aulas
                </span>

                <div className="lesson">
                    <Lesson/>
                    <Lesson/>
                    <Lesson/>
                    <Lesson/>
                    <Lesson/>
                    <Lesson/>
                </div>
            </aside>
        </SidebarDetails>
    )
}

export default Sidebar