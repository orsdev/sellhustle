import CustomButton from '@/components/Common/CustomButton'

const Header = () => {
  return (
    <header className="all__orders__header">
      <CustomButton
        title="All Orders"
        bg="bg-primary-blue_light_3"
        color="text-white"
      />
      <CustomButton
        title="New Order"
        bg="bg-primary-blue_light_3"
        color="text-white"
        showIcon={true}
      />
    </header>
  )
}

export default Header
