
import authSelector from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/authOperations';
import { AnimatePresence } from 'framer-motion';


export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(authSelector.getIsRefresh);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    !isRefreshUser && (
      <>
        <Suspense fallback="">
          <AnimatePresence>
            <Routes
              location={location}
              key={location.pathname}>
              <Route
                exact
                path="/"
                element={
                 <Layout />
                 }
              >
                <Route
                  index
                  element={
                    <PublicRoute>
                      <MainPage />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/signup"
                  element={
                    <PublicRoute restricted>
                      <RegistrationPage />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/login"
                  element={
                    <PublicRoute redirectTo="/diary" restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/calculator"
                  element={
                    <ProtectedRoute>
                      <MainPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/diary"
                  element={
                    <ProtectedRoute>
                      <DiaryPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/avatar"
                  element={
                    <ProtectedRoute restricted>
                      <AvatarUpload />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<NotFound />} />
              </Route>

            </Routes>
          </AnimatePresence>
        </Suspense>
      </>
    )
  );
}
