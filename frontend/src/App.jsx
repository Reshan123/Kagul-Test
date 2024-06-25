import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <>
        <div className="header" style={{
            marginBottom: '500px'
        }}>
            <Spline style={{
                width: '100%',
                height: '100vh'
            }} scene="https://draft.spline.design/QDcBIkkQI5n63r9I/scene.splinecode"/>
            <h1 style={{
                position: "absolute",
                top: '50px',
            }}>Header</h1>
        </div>
    </>
);
}

