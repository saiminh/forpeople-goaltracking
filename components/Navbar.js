import Link from "next/link"
import styles from "./Navbar.module.scss"

export default function Navbar(){
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href='#all'>
          <svg viewBox="0 0 119 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.66693 9.3782H0L0 7.41166H2.66693L2.66693 4.74059C2.66693 3.14486 2.9863 1.95326 3.62061 1.17281C4.25726 0.391353 5.35101 0 6.90496 0C7.1643 0 7.43923 0.00876912 7.7282 0.0263074C8.01352 0.0428434 8.32483 0.0922011 8.65459 0.175633L8.39318 2.19554C8.16684 2.1111 7.94986 2.05197 7.74041 2.01815C7.53018 1.98282 7.30411 1.96629 7.05958 1.96629C6.62536 1.96629 6.27637 2.02792 6.01495 2.15595C5.75327 2.28323 5.54668 2.46412 5.39986 2.69763C5.252 2.93315 5.15664 3.21476 5.1122 3.54248C5.0701 3.87044 5.04749 4.24626 5.04749 4.66618V7.41166H7.84513L7.84513 9.3782L5.02125 9.3782L5.02125 19.3635H2.66693L2.66693 9.3782Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.2077 13.1785C12.2077 13.7746 12.3019 14.3253 12.4921 14.8306C12.6803 15.3339 12.9467 15.7691 13.2895 16.1201C13.632 16.4785 14.0521 16.7594 14.5505 16.968C15.049 17.1741 15.6088 17.2775 16.2247 17.2775C16.8453 17.2775 17.4008 17.1741 17.8989 16.968C18.3996 16.7594 18.8197 16.4785 19.1622 16.1201C19.505 15.7691 19.7715 15.3339 19.9597 14.8306C20.1501 14.3253 20.2443 13.7746 20.2443 13.1785C20.2443 12.5846 20.1501 12.0317 19.9597 11.5284C19.7715 11.0231 19.505 10.5901 19.1622 10.2369C18.8197 9.8807 18.3996 9.59979 17.8989 9.39146C17.4008 9.18288 16.8453 9.08143 16.2247 9.08143C15.6088 9.08143 15.049 9.18288 14.5505 9.39146C14.0521 9.59979 13.632 9.8807 13.2895 10.2369C12.9467 10.5901 12.6803 11.0231 12.4921 11.5284C12.3019 12.0317 12.2077 12.5846 12.2077 13.1785ZM9.73608 13.1785C9.73608 12.319 9.90171 11.5155 10.2389 10.7693C10.5704 10.0253 11.0296 9.36974 11.6153 8.80719C12.1987 8.24464 12.8876 7.80083 13.6758 7.48018C14.4655 7.15707 15.3154 6.99292 16.2247 6.99292C17.1363 6.99292 17.9865 7.15707 18.7759 7.48018C19.5667 7.80083 20.253 8.24464 20.8367 8.80719C21.4201 9.36974 21.8814 10.0253 22.2152 10.7693C22.55 11.5155 22.718 12.319 22.718 13.1785C22.718 14.0402 22.55 14.8481 22.2152 15.5997C21.8814 16.3543 21.4201 17.0077 20.8367 17.5619C20.253 18.119 19.5667 18.5561 18.7759 18.8792C17.9865 19.2019 17.1363 19.364 16.2247 19.364C15.3154 19.364 14.4655 19.2019 13.6758 18.8792C12.8876 18.5561 12.1987 18.119 11.6153 17.5619C11.0296 17.0077 10.5704 16.3543 10.2389 15.5997C9.90171 14.8481 9.73608 14.0402 9.73608 13.1785Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M25.9636 7.82275H28.2745V9.59868H28.3247C28.4788 9.29168 28.6852 9.01226 28.9407 8.76043C29.1973 8.50859 29.4853 8.29594 29.8011 8.11595C30.1191 7.93814 30.4627 7.7942 30.8399 7.69042C31.2159 7.58349 31.5929 7.52954 31.9701 7.52954C32.3461 7.52954 32.6889 7.57938 32.9955 7.6776L32.8929 10.0368C32.7055 9.98913 32.5157 9.94801 32.3285 9.91728C32.1397 9.88438 31.9523 9.86745 31.7648 9.86745C30.6366 9.86745 29.772 10.1691 29.1739 10.7681C28.5724 11.3693 28.2745 12.3026 28.2745 13.5664V19.3628H25.9636L25.9636 7.82275Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M42.9277 9.11054C42.3281 9.11054 41.7871 9.21577 41.3037 9.42497C40.8206 9.63668 40.4131 9.92156 40.0809 10.2821C39.7485 10.6439 39.4878 11.0801 39.3053 11.5942C39.1228 12.1051 39.0317 12.666 39.0317 13.2691C39.0317 13.8762 39.1228 14.4331 39.3053 14.9483C39.4878 15.4591 39.7485 15.8976 40.0809 16.2569C40.4131 16.6209 40.8206 16.9058 41.3037 17.1152C41.7871 17.3245 42.3281 17.4319 42.9277 17.4319C43.5273 17.4319 44.0681 17.3245 44.5537 17.1152C45.0349 16.9058 45.4443 16.6209 45.7768 16.2569C46.109 15.8976 46.3677 15.4591 46.5502 14.9483C46.7327 14.4331 46.826 13.8762 46.826 13.2691C46.826 12.666 46.7327 12.1051 46.5502 11.5942C46.3677 11.0801 46.109 10.6439 45.7768 10.2821C45.4443 9.92156 45.0349 9.63668 44.5537 9.42497C44.0681 9.21577 43.5273 9.11054 42.9277 9.11054ZM36.7822 7.29433H39.0317V9.00957H39.0803C39.5128 8.37067 40.108 7.87635 40.8672 7.52333C41.6242 7.17031 42.4019 6.99292 43.2036 6.99292C44.1192 6.99292 44.948 7.15302 45.6876 7.46971C46.4295 7.79066 47.0639 8.23814 47.5875 8.80688C48.1131 9.38013 48.5149 10.0476 48.7996 10.8127C49.0809 11.5767 49.2232 12.3965 49.2232 13.2691C49.2232 14.1613 49.0809 14.9889 48.7996 15.7528C48.5149 16.5177 48.1131 17.1809 47.5875 17.7466C47.0639 18.3088 46.4295 18.7496 45.6876 19.0685C44.948 19.3885 44.1192 19.5473 43.2036 19.5473C42.3532 19.5473 41.5537 19.3674 40.8054 19.0059C40.0558 18.6443 39.4813 18.1543 39.0803 17.5317H39.0317V26.3564H36.7822V7.29433Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M61.9674 12.2109C61.9503 11.713 61.8718 11.2586 61.7294 10.8449C61.5883 10.4302 61.3751 10.0695 61.0936 9.76394C60.8089 9.45613 60.4543 9.21645 60.0304 9.04366C59.6066 8.86865 59.1099 8.78226 58.5436 8.78226C57.9926 8.78226 57.4892 8.88717 57.0315 9.09451C56.5706 9.30062 56.185 9.56844 55.8687 9.89896C55.5499 10.2315 55.3044 10.5988 55.1305 11.0058C54.9544 11.4118 54.8674 11.8125 54.8674 12.2109L61.9674 12.2109ZM54.8674 14.0002C54.8674 14.5121 54.9795 14.9774 55.2043 15.402C55.4294 15.8253 55.7261 16.186 56.0913 16.4807C56.4588 16.7799 56.8849 17.0119 57.3687 17.176C57.8524 17.3446 58.3511 17.4266 58.8686 17.4266C59.5688 17.4266 60.1773 17.2649 60.6926 16.9418C61.2099 16.6199 61.6849 16.1946 62.1185 15.6632L63.8175 16.9549C62.5675 18.5606 60.8176 19.364 58.5675 19.364C57.6338 19.364 56.7893 19.2053 56.0295 18.8921C55.2729 18.5778 54.6316 18.1414 54.1054 17.5885C53.5794 17.0324 53.1751 16.3792 52.8924 15.6254C52.6086 14.8728 52.4685 14.0575 52.4685 13.1785C52.4685 12.3017 52.6206 11.4864 52.9304 10.7338C53.2382 9.97672 53.6621 9.32555 54.2055 8.76942C54.7469 8.21527 55.3936 7.7791 56.1425 7.46488C56.8936 7.15287 57.7098 6.99292 58.5926 6.99292C59.6426 6.99292 60.5318 7.17657 61.2568 7.54041C61.9806 7.90549 62.5762 8.38164 63.0425 8.96912C63.5099 9.55561 63.8468 10.2196 64.0543 10.9549C64.2655 11.6925 64.3686 12.4409 64.3686 13.2034V14.0002L54.8674 14.0002Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M70.0879 13.1785C70.0879 13.7746 70.1821 14.3253 70.3702 14.8306C70.5607 15.3339 70.8249 15.7691 71.1699 16.1201C71.5122 16.4785 71.9323 16.7594 72.4307 16.968C72.9291 17.1741 73.4889 17.2775 74.1048 17.2775C74.723 17.2775 75.2808 17.1741 75.779 16.968C76.2777 16.7594 76.6975 16.4785 77.0425 16.1201C77.3851 15.7691 77.6518 15.3339 77.8397 14.8306C78.0301 14.3253 78.1243 13.7746 78.1243 13.1785C78.1243 12.5846 78.0301 12.0317 77.8397 11.5284C77.6518 11.0231 77.3851 10.5901 77.0425 10.2369C76.6975 9.8807 76.2777 9.59979 75.779 9.39146C75.2808 9.18288 74.723 9.08143 74.1048 9.08143C73.4889 9.08143 72.9291 9.18288 72.4307 9.39146C71.9323 9.59979 71.5122 9.8807 71.1699 10.2369C70.8249 10.5901 70.5607 11.0231 70.3702 11.5284C70.1821 12.0317 70.0879 12.5846 70.0879 13.1785ZM67.614 13.1785C67.614 12.319 67.7819 11.5155 68.117 10.7693C68.4506 10.0253 68.9098 9.36974 69.4955 8.80719C70.0789 8.24464 70.7652 7.80083 71.5549 7.48018C72.3454 7.15707 73.1958 6.99292 74.1048 6.99292C75.0167 6.99292 75.8665 7.15707 76.656 7.48018C77.4467 7.80083 78.1333 8.24464 78.7167 8.80719C79.3001 9.36974 79.7593 10.0253 80.0952 10.7693C80.43 11.5155 80.5959 12.319 80.5959 13.1785C80.5959 14.0402 80.43 14.8481 80.0952 15.5997C79.7593 16.3543 79.3001 17.0077 78.7167 17.5619C78.1333 18.119 77.4467 18.5561 76.656 18.8792C75.8665 19.2019 75.0167 19.364 74.1048 19.364C73.1958 19.364 72.3454 19.2019 71.5549 18.8792C70.7652 18.5561 70.0789 18.119 69.4955 17.5619C68.9098 17.0077 68.4506 16.3543 68.117 15.5997C67.7819 14.8481 67.614 14.0402 67.614 13.1785Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M90.5277 9.11054C89.9281 9.11054 89.3849 9.21577 88.904 9.42497C88.4206 9.63668 88.0109 9.92156 87.6787 10.2821C87.3465 10.6439 87.0881 11.0801 86.9053 11.5942C86.7228 12.1051 86.6295 12.666 86.6295 13.2691C86.6295 13.8762 86.7228 14.4331 86.9053 14.9483C87.0881 15.4591 87.3465 15.8976 87.6787 16.2569C88.0109 16.6209 88.4206 16.9058 88.904 17.1152C89.3849 17.3245 89.9281 17.4319 90.5277 17.4319C91.1273 17.4319 91.6683 17.3245 92.1515 17.1152C92.6349 16.9058 93.0423 16.6209 93.3745 16.2569C93.7069 15.8976 93.9654 15.4591 94.1501 14.9483C94.3326 14.4331 94.4237 13.8762 94.4237 13.2691C94.4237 12.666 94.3326 12.1051 94.1501 11.5942C93.9654 11.0801 93.7069 10.6439 93.3745 10.2821C93.0423 9.92156 92.6349 9.63668 92.1515 9.42497C91.6683 9.21577 91.1273 9.11054 90.5277 9.11054ZM84.3821 7.29433H86.6295V9.00957H86.6806C87.1129 8.37067 87.7083 7.87635 88.465 7.52333C89.2243 7.17031 90.0021 6.99292 90.8016 6.99292C91.7192 6.99292 92.5457 7.15302 93.2876 7.46971C94.0274 7.79066 94.6638 8.23814 95.1874 8.80688C95.7108 9.38013 96.115 10.0476 96.3995 10.8127C96.6808 11.5767 96.8231 12.3965 96.8231 13.2691C96.8231 14.1613 96.6808 14.9889 96.3995 15.7528C96.115 16.5177 95.7108 17.1809 95.1874 17.7466C94.6638 18.3088 94.0274 18.7496 93.2876 19.0685C92.5457 19.3885 91.7192 19.5473 90.8016 19.5473C89.9532 19.5473 89.1537 19.3674 88.4032 19.0059C87.6561 18.6443 87.0814 18.1543 86.6806 17.5317H86.6295V26.3564H84.3821V7.29433Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M101.151 19.3637H103.315V0.538086L101.151 0.538086V19.3637Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M116.6 12.2109C116.583 11.713 116.504 11.2586 116.362 10.8449C116.221 10.4302 116.009 10.0695 115.726 9.76394C115.441 9.45613 115.087 9.21645 114.663 9.04366C114.237 8.86865 113.74 8.78226 113.174 8.78226C112.625 8.78226 112.122 8.88717 111.663 9.09451C111.204 9.30062 110.816 9.56844 110.502 9.89896C110.183 10.2315 109.938 10.5988 109.764 11.0058C109.588 11.4118 109.501 11.8125 109.501 12.2109L116.6 12.2109ZM109.501 14.0002C109.501 14.5121 109.613 14.9774 109.838 15.402C110.063 15.8253 110.36 16.186 110.725 16.4807C111.092 16.7799 111.518 17.0119 112.002 17.176C112.483 17.3446 112.984 17.4266 113.501 17.4266C114.201 17.4266 114.808 17.2649 115.325 16.9418C115.842 16.6199 116.317 16.1946 116.751 15.6632L118.449 16.9549C117.2 18.5606 115.45 19.364 113.2 19.364C112.267 19.364 111.422 19.2053 110.663 18.8921C109.906 18.5778 109.263 18.1414 108.737 17.5885C108.213 17.0324 107.809 16.3792 107.526 15.6254C107.243 14.8728 107.1 14.0575 107.1 13.1785C107.1 12.3017 107.255 11.4864 107.562 10.7338C107.872 9.97672 108.296 9.32555 108.837 8.76942C109.38 8.21527 110.025 7.7791 110.776 7.46488C111.527 7.15287 112.343 6.99292 113.225 6.99292C114.275 6.99292 115.162 7.17657 115.887 7.54041C116.613 7.90549 117.208 8.38164 117.675 8.96912C118.142 9.55561 118.479 10.2196 118.686 10.9549C118.897 11.6925 119 12.4409 119 13.2034V14.0002L109.501 14.0002Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}