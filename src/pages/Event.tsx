import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Video from "../components/Video"
import EventDetails from "../components/EventDetails"

const Event = () => {
    return (
        <EventDetails>
            <Header />
            <main>
                <Video/>
                <Sidebar />
            </main>
        </EventDetails>
    )
}

export default Event