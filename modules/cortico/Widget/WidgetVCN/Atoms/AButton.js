
const a_button_sm = "tw-h-[38px]";
const a_button_lg = "tw-h-[48px]";
const a_button_primary = "tw-text-white tw-bg-primary-500 hover:tw-bg-primary-700 tw-font-medium";
const a_button_secondary = "text-primary-600 bg-white border border-secondary-100 hover:border-primary-600 font-medium";
const a_button_tertiary = "text-secondary-500 bg-white border border-secondary-100 hover:border-secondary-500 font-medium";

const variantClass = {
  'button-primary-sm': `${a_button_sm} ${a_button_primary}`,
  'button-primary-lg': `${a_button_lg} ${a_button_primary}`,
  'button-secondary-sm': `${a_button_sm} ${a_button_secondary}`,
  'button-secondary-lg': `${a_button_lg} ${a_button_secondary}`,
  'button-tertiary-sm': `${a_button_sm} ${a_button_tertiary}`,
  'button-tertiary-lg': `${a_button_lg} ${a_button_tertiary}`,
  'tab': 'tw-border tw-border-secondary-100 tw-rounded-l-full tw-gap-x-1.5 tw-px-6 tw-rounded-r-full tw-flex tw-items-center'
}

const LoadingButton = ({ isLoading }) => {
  if (!isLoading) return

  return (
    <svg role="status" class="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
    </svg>
  )
}

const AButton = ({ variant = 'button-primary-sm',isLoading = false,href,children,className,...props }) => {

  return (
    href == undefined ?
      <button className={ `a-button tw-my-3 tw-rounded ${variantClass[variant]} ${className ? className : ''}` } { ...props } >
        <LoadingButton isLoading={ isLoading } />
        { children }
      </button> :
      <a href={ href } className={ `a-button tw-my-3 tw-flex tw-justify-center tw-items-center tw-rounded ${variantClass[variant]} ${className}` } { ...props } >
        <LoadingButton isLoading={ isLoading } />
        { children }
      </a>
  )
}

export default AButton
// export default define('a-button', () => AButton, { attributes:['variant']});