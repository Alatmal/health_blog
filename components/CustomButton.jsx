

const CustomButton = ({title}) => {
  return (
    <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-30 mx-10">
      <span>{title}</span>
    </button>
  )
}

export default CustomButton