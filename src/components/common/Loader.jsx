

// Return value should be component
const Loader = ({ loading }) => (
  <>
    {
    loading && (
    <div className='main-loader w-100 h-100 bg-light position-relative' style={{zIndex:10}}>
      <div className='main-spinner'>

            <div className='blink-image'>
              <img src='/loading.gif' alt="Loading..." />
            </div>
      </div>
    </div>
  )
  }
  </>
);

export default Loader;
