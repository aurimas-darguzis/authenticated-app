import React, { useContext } from 'react';
import { FirebaseContext } from '../../context/firebase';
import Sidebar from '../../layout/Sidebar';
import Main from '../../layout/Main';
import Header from '../../components/Header';
import Inventory from '../../components/Inventory';
import Sales from '../../components/Sales';
import { Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { ProtectedRoute } from '../../helpers/routes';
import { useAuthListener } from '../../hooks';
import '../../styles/dashboard.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Dashboard = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__sidebar">
        <Sidebar>
          <div>
            <Link to="/inventory"> Inventory</Link>
          </div>
          <div>
            <Link to="/sales"> Sales</Link>
          </div>
        </Sidebar>
      </div>
      <div className="dashboard__container__main">
        <Header>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </Header>
        <Main>
          <Switch>
            <ProtectedRoute user={user} path={ROUTES.INVENTORY}>
              <Inventory />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.SALES}>
              <Sales />
            </ProtectedRoute>
          </Switch>
        </Main>
      </div>
    </div>
  );
};

export default Dashboard;
