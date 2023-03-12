import React, {Fragment, useState} from 'react';
import CreateEditAccount from './components/CreateEditAccount';
import SignInPage from './components/SignInPage';
import {NativeRouter, Route, Routes, Link} from 'react-router-native';
import HomeTab from './components/HomeTab';
import Swipe from './components/Swipe';
import Profile from './components/Profile';
import Matches from './components/Matches';

function App(): JSX.Element {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/CreateAccount" element={<CreateEditAccount />} />
        <Route path="/HomeTab" element={<HomeTab />} />
        <Route path="/SwipeTab" element={<Swipe />} />
        <Route path="/ProfileTab" element={<Profile />} />
        <Route path="/MatchesTab" element={<Matches />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </NativeRouter>
  );
}

export default App;
