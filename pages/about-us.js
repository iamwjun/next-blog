export default function AboutUs() {
  const tips = () => {
    console.log('关于我们');
  }
  return <h1 onClick={tips}>关于我们</h1>
}