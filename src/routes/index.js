import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from '../pages/Welcome/index'
import SignIn from '../pages/SignIn/index'
import SignUp from '../pages/SignUp/index'
import PostArea from '../pages/PostArea/index'
import React from 'react'

const Routes = () => {
    const token = localStorage.getItem('token')

  return (
    <Switch>
        <Route exact path="/">
            <Welcome/>
        </Route>

        <Route exact path="/signin">
            <SignIn/>
        </Route>

        <Route exact path="/signup">
            <SignUp/>
        </Route>

        <Route exact path="/postarea">
            {token?.slice(10,-2) ? (
                <PostArea/>
            ) : (
                <Redirect to="/signin" />
            )}
        </Route>
    </Switch>
  )
}

export default Routes
