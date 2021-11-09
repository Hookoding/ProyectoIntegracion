import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from '../views/components/Sidebar'
import Home from '../views/Home'
import Mentor from '../views/Mentor'
import Mentorized from '../views/Mentorized'
import Mentoring from '../views/Mentoring'

export default function Routes() {
    return (<>
        <Router>
            <Sidebar>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/mentor">
                        <Mentor/>
                    </Route>
                    <Route path="/mentorized">
                        <Mentorized/>
                    </Route>
                    <Route path="/mentoring">
                        <Mentoring/>
                    </Route>
                </Switch>
            </Sidebar>
        </Router>
    </>
    )
}
