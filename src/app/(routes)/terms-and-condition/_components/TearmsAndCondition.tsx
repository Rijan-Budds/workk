import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { format } from 'date-fns'
import './terms.css'

const TearmsAndCondition = async () => {
  const lastUpdated = new Date()

  const renderTermsUi = () => {
    return (
      <div>
        <div className="font-workSans font-normal text-[14px] leading-4 text-body">
          Last Update: {format(lastUpdated, 'MMMM dd, yyyy')}
        </div>
        <div className="terms-content custom-list">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet ligula nec nisi efficitur, a bibendum nulla pretium.
            Aliquam erat volutpat. Fusce a tortor sed purus sagittis tincidunt.
          </p>
          <ul>
            <li>
              Nulla facilisi. Aenean feugiat tincidunt lorem, vitae tincidunt
              augue fermentum a.
            </li>
            <li>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae.
            </li>
            <li>
              Morbi at felis in nulla efficitur accumsan in ac neque.
            </li>
            <li>
              Curabitur congue, mauris sit amet vestibulum cursus, sem nunc
              faucibus justo, sed tincidunt metus magna vel magna.
            </li>
          </ul>
          <p>
            Suspendisse non turpis congue, eleifend leo non, accumsan sem.
            Integer id sapien arcu. Cras posuere ex nec augue euismod, ut
            pretium magna consequat.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <CoverImage
        title="Terms and Conditions"
        list={[{ link: null, title: 'Terms and Condition' }]}
      />
      <div className="w-full px-4 md:px-12 lg:px-[60px] 2xl:px-[200px] 2xl_lg:px-[240px]  3xl:px-[540px] py-[56px]">
        {renderTermsUi()}
      </div>
    </div>
  )
}

export default TearmsAndCondition
