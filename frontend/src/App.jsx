import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <>
        <div className="header" style={{
            width: '100%',
            height: '100vh',
            marginBottom: '500px'
        }}>
            <Spline style={{
                width: '100%',
                height: '100vh'
            }} scene="https://draft.spline.design/lFLR4Bv5ifV6BGWa/scene.splinecode"/>
            <h1 style={{
                position: "absolute",
                top: '50px',
            }}>Header</h1>
        </div>
    </>
);
}

