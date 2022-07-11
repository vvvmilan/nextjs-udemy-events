import styles from '../styles/Home.module.css'
import {getFeaturedEvents} from "../events";
import EventList from "../components/events/event-list";

export default function Home() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div className={styles.container}>
            <EventList items={featuredEvents} />
        </div>
    )
}
