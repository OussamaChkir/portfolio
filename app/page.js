'use client';
import { useState } from 'react'
import Image from 'next/image';
export default function Home() {

  const [Toggle, setToggle] = useState(false);

  const [stylebtn1, setStylebtn1] = useState('effect');
  const [stylebtn2, setStylebtn2] = useState('');

  const [textbtn1, setTextbtn1] = useState('Yes, Spoil Me!');
  const [textbtn2, setTextbtn2] = useState('No spoil please!');

  const [bdg1, setBdg1] = useState('block');
  const [bdg2, setBdg2] = useState('hidden');

  function changeTheme() {
    setToggle(!Toggle);
  }

  function triggerhover1(){
    setStylebtn1('');
    setStylebtn2('effect');
    setTextbtn1('No spoil please!');
    setTextbtn2('Yes, Spoil Me!');
    setBdg1('hidden');
    setBdg2('block');
  }

  function triggerhover2(){
    setStylebtn2('');
    setStylebtn1('effect');
    setTextbtn2('No spoil please!');
    setTextbtn1('Yes, Spoil Me!');
    setBdg2('hidden');
    setBdg1('block');
  }

  return (
    <main>
      <button class="toggle" onClick={() => changeTheme()} aria-pressed={Toggle} title="Toggle Dark Mode">
        <span class="toggle__content">
          <svg aria-hidden={true} class="toggle__backdrop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 290 228">
            <g class="clouds">
              <path fill="#D9D9D9" d="M335 147.5c0 27.89-22.61 50.5-50.5 50.5a50.78 50.78 0 0 1-9.29-.853c-2.478 12.606-10.595 23.188-21.615 29.011C245.699 243.749 228.03 256 207.5 256a50.433 50.433 0 0 1-16.034-2.599A41.811 41.811 0 0 1 166 262a41.798 41.798 0 0 1-22.893-6.782A42.21 42.21 0 0 1 135 256a41.82 41.82 0 0 1-19.115-4.592A41.84 41.84 0 0 1 88 262c-1.827 0-3.626-.117-5.391-.343C74.911 270.448 63.604 276 51 276c-23.196 0-42-18.804-42-42s18.804-42 42-42c1.827 0 3.626.117 5.391.343C64.089 183.552 75.396 178 88 178a41.819 41.819 0 0 1 19.115 4.592C114.532 176.002 124.298 172 135 172a41.798 41.798 0 0 1 22.893 6.782 42.066 42.066 0 0 1 7.239-.773C174.137 164.159 189.749 155 207.5 155c.601 0 1.199.01 1.794.031A41.813 41.813 0 0 1 234 147h.002c.269-27.66 22.774-50 50.498-50 27.89 0 50.5 22.61 50.5 50.5Z" />
            </g>
          </svg>
          <span aria-hidden={true} class="pilot__container">
            <span class="pilot-bear">
              <img src="https://assets.codepen.io/605876/pilot-bear.svg" alt="pilot-bear" class="pilot" />
            </span>
          </span>
          <svg aria-hidden={true} class="toggle__backdrop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 290 228">
            <g class="clouds">
              <path fill="#fff" d="M328 167.5c0 15.214-7.994 28.56-20.01 36.068.007.31.01.621.01.932 0 23.472-19.028 42.5-42.5 42.5-3.789 0-7.461-.496-10.957-1.426C249.671 263.676 233.141 277 213.5 277a42.77 42.77 0 0 1-7.702-.696C198.089 284.141 187.362 289 175.5 289a42.338 42.338 0 0 1-27.864-10.408A42.411 42.411 0 0 1 133.5 281c-4.36 0-8.566-.656-12.526-1.876C113.252 287.066 102.452 292 90.5 292a42.388 42.388 0 0 1-15.8-3.034A42.316 42.316 0 0 1 48.5 298C25.028 298 6 278.972 6 255.5S25.028 213 48.5 213a42.388 42.388 0 0 1 15.8 3.034A42.316 42.316 0 0 1 90.5 207c4.36 0 8.566.656 12.526 1.876C110.748 200.934 121.548 196 133.5 196a42.338 42.338 0 0 1 27.864 10.408A42.411 42.411 0 0 1 175.5 204c2.63 0 5.204.239 7.702.696C190.911 196.859 201.638 192 213.5 192c3.789 0 7.461.496 10.957 1.426 2.824-10.491 9.562-19.377 18.553-24.994-.007-.31-.01-.621-.01-.932 0-23.472 19.028-42.5 42.5-42.5s42.5 19.028 42.5 42.5Z" />
            </g>
          </svg>
          <span class="toggle__indicator-wrapper">
            <span class="toggle__indicator">
              <span class="toggle__star">
                <span class="sun">
                  <span class="moon">
                    <span class="moon__crater"></span>
                    <span class="moon__crater"></span>
                    <span class="moon__crater"></span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <svg aria-hidden={true} class="toggle__backdrop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 290 228">
            <g>
              <g class="stars">
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M61 11.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.749 3.749 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.749 3.749 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.749 3.749 0 0 0 2.576-2.576l.813-2.846A.75.75 0 0 1 61 11.5Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M62.5 45.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M32 31.188a.28.28 0 0 1 .27.204l.305 1.067a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.067-.305a.28.28 0 0 1 0-.54l1.067-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.203Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M41.5 74.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M34 83.188a.28.28 0 0 1 .27.203l.305 1.068a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.068-.305a.28.28 0 0 1 0-.54l1.068-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.204Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M63 89.25a.375.375 0 0 1 .36.272l.407 1.423a1.874 1.874 0 0 0 1.288 1.288l1.423.406a.374.374 0 0 1 0 .722l-1.423.406a1.874 1.874 0 0 0-1.288 1.288l-.407 1.423a.374.374 0 0 1-.72 0l-.407-1.423a1.874 1.874 0 0 0-1.288-1.288l-1.423-.406a.374.374 0 0 1 0-.722l1.423-.406a1.874 1.874 0 0 0 1.288-1.288l.407-1.423a.376.376 0 0 1 .36-.272Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M110.5 53.156a.236.236 0 0 1 .225.17l.254.89a1.174 1.174 0 0 0 .805.805l.89.254a.23.23 0 0 1 .122.084.233.233 0 0 1-.122.366l-.89.254a1.167 1.167 0 0 0-.805.805l-.254.89a.232.232 0 0 1-.225.17.235.235 0 0 1-.225-.17l-.254-.89a1.174 1.174 0 0 0-.805-.805l-.89-.254a.23.23 0 0 1-.122-.084.233.233 0 0 1 .122-.366l.89-.254a1.167 1.167 0 0 0 .805-.805l.254-.89a.232.232 0 0 1 .225-.17Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M120 27.188a.279.279 0 0 1 .27.204l.305 1.067a1.41 1.41 0 0 0 .966.966l1.067.305a.283.283 0 0 1 .148.1.286.286 0 0 1 0 .34.283.283 0 0 1-.148.1l-1.067.305a1.403 1.403 0 0 0-.966.966l-.305 1.067a.279.279 0 0 1-.439.147.275.275 0 0 1-.101-.147l-.305-1.067a1.41 1.41 0 0 0-.966-.966l-1.068-.305a.284.284 0 0 1-.147-.1.286.286 0 0 1 0-.34.284.284 0 0 1 .147-.1l1.068-.305a1.405 1.405 0 0 0 .966-.966l.305-1.067a.279.279 0 0 1 .27-.204Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M155 28.5a.753.753 0 0 1 .721.544l.813 2.846a3.746 3.746 0 0 0 2.576 2.576l2.846.813a.747.747 0 0 1 .543.721.75.75 0 0 1-.543.721l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.747.747 0 0 1-.721.543.749.749 0 0 1-.721-.543l-.813-2.846a3.746 3.746 0 0 0-2.576-2.576l-2.846-.813a.747.747 0 0 1-.543-.721.75.75 0 0 1 .543-.721l2.846-.813a3.75 3.75 0 0 0 2.576-2.576l.813-2.846A.751.751 0 0 1 155 28.5Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M147 60.25a.377.377 0 0 1 .36.272l.407 1.423a1.883 1.883 0 0 0 1.288 1.288l1.423.407a.375.375 0 0 1 0 .72l-1.423.407a1.875 1.875 0 0 0-1.288 1.288l-.407 1.423a.371.371 0 0 1-.36.272.377.377 0 0 1-.36-.272l-.407-1.423a1.883 1.883 0 0 0-1.288-1.288l-1.423-.406a.375.375 0 0 1 0-.722l1.423-.406a1.875 1.875 0 0 0 1.288-1.288l.407-1.423a.372.372 0 0 1 .36-.272Z" clip-rule="evenodd" />
                </g>
                <g>
                  <path fill="#fff" fill-rule="evenodd" d="M125.5 76.344a.513.513 0 0 1 .496.374l.559 1.956a2.574 2.574 0 0 0 1.771 1.771l1.956.56a.514.514 0 0 1 .27.805.514.514 0 0 1-.27.186l-1.956.559a2.57 2.57 0 0 0-1.771 1.77l-.559 1.957a.514.514 0 0 1-.806.27.514.514 0 0 1-.186-.27l-.559-1.956a2.574 2.574 0 0 0-1.771-1.771l-1.956-.56a.514.514 0 0 1-.27-.805.514.514 0 0 1 .27-.186l1.956-.559a2.57 2.57 0 0 0 1.771-1.77l.559-1.957a.515.515 0 0 1 .496-.374Z" clip-rule="evenodd" />
                </g>
              </g>
            </g>
          </svg>
          <span class="astrobear__container">
            <span class="astrobear">

              <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 316 432">
                <circle cx="158" cy="143" r="140" fill="#444" />
                <circle cx="158" cy="143" r="140" fill="url(#a)" fill-opacity=".2" />
                <circle cx="158" cy="143" r="140" stroke="#000" stroke-width="6" />
                <path fill="#AF7128" fill-rule="evenodd" d="M65.98 159.61C49.913 155.643 38 141.134 38 123.842 38 103.495 54.495 87 74.842 87c14.337 0 26.761 8.19 32.85 20.146C119.687 100.674 133.414 97 148 97h20c14.52 0 28.19 3.641 40.146 10.059C214.251 95.15 226.65 87 240.952 87c20.347 0 36.842 16.495 36.842 36.842 0 17.222-11.818 31.685-27.787 35.72A85.104 85.104 0 0 1 253 182v66.56l10.054-10.054c11.325-11.325 29.687-11.325 41.012 0s11.325 29.687 0 41.012l-44.548 44.548a29.004 29.004 0 0 1-6.518 4.906V407c0 12.15-9.85 22-22 22h-44c-12.15 0-22-9.85-22-22v-28.69a41.072 41.072 0 0 1-14 .174V407c0 12.15-9.85 22-22 22H85c-12.15 0-22-9.85-22-22v-77.797a28.99 28.99 0 0 1-6.946-5.137l-44.548-44.548c-11.325-11.325-11.325-29.687 0-41.012 11.326-11.325 29.687-11.325 41.013 0L63 248.988V182a85.106 85.106 0 0 1 2.98-22.39Z" clip-rule="evenodd" />
                <path fill="#000" d="m65.98 159.61 2.894.789a3.002 3.002 0 0 0-2.175-3.701l-.72 2.912Zm41.712-52.464-2.673 1.362a3 3 0 0 0 4.098 1.279l-1.425-2.641Zm100.454-.087-1.419 2.643a3 3 0 0 0 4.089-1.274l-2.67-1.369Zm41.861 52.503-.735-2.908a2.997 2.997 0 0 0-2.159 3.698l2.894-.79ZM253 248.56h-3a3 3 0 0 0 5.121 2.121L253 248.56Zm10.054-10.054-2.121-2.121 2.121 2.121Zm41.012 0-2.121 2.122 2.121-2.122Zm0 41.012 2.121 2.122-2.121-2.122ZM253 328.972l-1.448-2.627a3 3 0 0 0-1.552 2.627h3Zm-88 49.338h3a3 3 0 0 0-3.548-2.949l.548 2.949Zm-14 .174.475-2.963a3 3 0 0 0-3.475 2.963h3Zm-88-49.281h3a3 3 0 0 0-1.597-2.651L63 329.203Zm-6.946-5.137-2.121 2.121 2.121-2.121Zm-44.548-44.548-2.121 2.122 2.121-2.122Zm0-41.012 2.122 2.122-2.122-2.122Zm41.013 0-2.122 2.122 2.122-2.122ZM63 248.988l-2.121 2.121A2.999 2.999 0 0 0 66 248.988h-3ZM35 123.842c0 18.704 12.886 34.391 30.26 38.681l1.439-5.825C51.941 153.054 41 139.721 41 123.842h-6ZM74.842 84C52.838 84 35 101.838 35 123.842h6C41 105.151 56.151 90 74.842 90v-6Zm35.524 21.785C103.785 92.862 90.351 84 74.842 84v6c13.165 0 24.58 7.517 30.177 18.508l5.347-2.723ZM148 94c-15.095 0-29.311 3.803-41.733 10.506l2.85 5.281C120.685 103.544 133.924 100 148 100v-6Zm20 0h-20v6h20v-6Zm41.565 10.416C197.183 97.769 183.027 94 168 94v6c14.013 0 27.196 3.512 38.727 9.702l2.838-5.286ZM240.952 84c-15.471 0-28.878 8.82-35.476 21.691l5.34 2.737C216.427 97.481 227.819 90 240.952 90v-6Zm39.842 39.842c0-22.004-17.838-39.842-39.842-39.842v6c18.69 0 33.842 15.151 33.842 33.842h6Zm-30.052 38.629c17.269-4.364 30.052-20 30.052-38.629h-6c0 15.816-10.853 29.104-25.522 32.812l1.47 5.817ZM256 182a88.09 88.09 0 0 0-3.099-23.228l-5.788 1.58A82.082 82.082 0 0 1 250 182h6Zm0 66.56V182h-6v66.56h6Zm-.879 2.121 10.054-10.053-4.242-4.243-10.054 10.054 4.242 4.242Zm10.054-10.053c10.154-10.154 26.616-10.154 36.77 0l4.242-4.243c-12.496-12.497-32.758-12.497-45.254 0l4.242 4.243Zm36.77 0c10.153 10.153 10.153 26.615 0 36.769l4.242 4.243c12.497-12.497 12.497-32.758 0-45.255l-4.242 4.243Zm0 36.769-44.548 44.548 4.243 4.242 44.547-44.547-4.242-4.243Zm-44.548 44.548a26.013 26.013 0 0 1-5.845 4.4l2.896 5.255a32.006 32.006 0 0 0 7.192-5.413l-4.243-4.242ZM256 360v-31.028h-6V360h6Zm0 47v-47h-6v47h6Zm-25 25c13.807 0 25-11.193 25-25h-6c0 10.493-8.506 19-19 19v6Zm-44 0h44v-6h-44v6Zm-25-25c0 13.807 11.193 25 25 25v-6c-10.493 0-19-8.507-19-19h-6Zm0-28.69V407h6v-28.69h-6Zm-4.5 3.69c2.74 0 5.429-.253 8.048-.74l-1.096-5.899c-2.261.42-4.583.639-6.952.639v6Zm-6.975-.554c2.279.365 4.608.554 6.975.554v-6c-2.047 0-4.058-.163-6.025-.479l-.95 5.925ZM154 407v-28.516h-6V407h6Zm-25 25c13.807 0 25-11.193 25-25h-6c0 10.493-8.506 19-19 19v6Zm-44 0h44v-6H85v6Zm-25-25c0 13.807 11.193 25 25 25v-6c-10.493 0-19-8.507-19-19h-6Zm0-47v47h6v-47h-6Zm0-30.797V360h6v-30.797h-6Zm-6.067-3.016a32.008 32.008 0 0 0 7.664 5.668l2.806-5.303a26.002 26.002 0 0 1-6.228-4.607l-4.242 4.242ZM9.385 281.64l44.548 44.547 4.242-4.242-44.547-44.548-4.243 4.243Zm0-45.255c-12.497 12.497-12.497 32.758 0 45.255l4.243-4.243c-10.154-10.154-10.154-26.616 0-36.769l-4.243-4.243Zm45.255 0c-12.497-12.497-32.758-12.497-45.255 0l4.243 4.243c10.153-10.154 26.616-10.154 36.77 0l4.242-4.243Zm10.481 10.481L54.64 236.385l-4.243 4.243 10.482 10.481 4.242-4.243ZM60.001 182v66.988h6V182h-6Zm3.084-23.178A88.1 88.1 0 0 0 60 182h6c0-7.48 1.001-14.722 2.874-21.601l-5.789-1.577Z" />
                <path fill="#fff" fill-rule="evenodd" d="M267.721 234.712C241.49 266.061 202.073 286 158 286c-43.749 0-82.91-19.647-109.141-50.598-11.328-8.104-27.18-7.069-37.353 3.104-11.325 11.325-11.325 29.687 0 41.012l44.548 44.548A28.99 28.99 0 0 0 63 329.203V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-28.517c2.123.341 4.293.517 6.5.517 2.555 0 5.06-.236 7.5-.69V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22V328.972a29.004 29.004 0 0 0 6.518-4.906l44.548-44.548c11.325-11.325 11.325-29.687 0-41.012-9.875-9.875-25.099-11.139-36.345-3.794Z" clip-rule="evenodd" />
                <path fill="url(#b)" fill-opacity=".5" fill-rule="evenodd" d="M267.721 234.712C241.49 266.061 202.073 286 158 286c-43.749 0-82.91-19.647-109.141-50.598-11.328-8.104-27.18-7.069-37.353 3.104-11.325 11.325-11.325 29.687 0 41.012l44.548 44.548A28.99 28.99 0 0 0 63 329.203V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-28.517c2.123.341 4.293.517 6.5.517 2.555 0 5.06-.236 7.5-.69V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22V328.972a29.004 29.004 0 0 0 6.518-4.906l44.548-44.548c11.325-11.325 11.325-29.687 0-41.012-9.875-9.875-25.099-11.139-36.345-3.794Z" clip-rule="evenodd" />
                <path fill="#000" d="m267.721 234.712-1.64-2.511c-.248.162-.47.359-.66.586l2.3 1.925Zm-218.862.69 2.289-1.94a3.026 3.026 0 0 0-.544-.5l-1.745 2.44Zm-37.353 3.104 2.122 2.121-2.122-2.121Zm0 41.012-2.121 2.122 2.121-2.122Zm44.548 44.548-2.121 2.121 2.121-2.121ZM63 329.203h3a2.999 2.999 0 0 0-1.597-2.651L63 329.203Zm88 49.28.475-2.962a3 3 0 0 0-3.475 2.962h3Zm14-.173h3a3 3 0 0 0-3.548-2.949l.548 2.949Zm88-49.338-1.448-2.627a3 3 0 0 0-1.552 2.627h3Zm51.066-49.454 2.121 2.122-2.121-2.122Zm0-41.012-2.121 2.121 2.121-2.121Zm-38.645-5.719C239.735 263.484 201.148 283 158 283v6c44.999 0 85.245-20.361 112.022-52.362l-4.601-3.851ZM158 283c-42.831 0-81.167-19.23-106.852-49.538l-4.578 3.879C73.347 268.937 113.332 289 158 289v-6ZM13.628 240.627c9.118-9.118 23.331-10.049 33.486-2.785l3.49-4.88c-12.502-8.944-29.991-7.805-41.219 3.423l4.243 4.242Zm0 36.77c-10.154-10.154-10.154-26.616 0-36.77l-4.243-4.242c-12.497 12.497-12.497 32.758 0 45.255l4.243-4.243Zm44.547 44.548-44.547-44.548-4.243 4.243 44.548 44.547 4.242-4.242Zm6.228 4.607a26.002 26.002 0 0 1-6.228-4.607l-4.242 4.242a32.008 32.008 0 0 0 7.664 5.668l2.806-5.303ZM66 360v-30.797h-6V360h6Zm0 47v-47h-6v47h6Zm19 19c-10.493 0-19-8.507-19-19h-6c0 13.807 11.193 25 25 25v-6Zm44 0H85v6h44v-6Zm19-19c0 10.493-8.506 19-19 19v6c13.807 0 25-11.193 25-25h-6Zm0-28.517V407h6v-28.517h-6Zm9.5-2.483c-2.047 0-4.058-.163-6.025-.479l-.95 5.925c2.279.365 4.608.554 6.975.554v-6Zm6.952-.639c-2.261.42-4.583.639-6.952.639v6c2.74 0 5.429-.253 8.048-.74l-1.096-5.899ZM168 407v-28.69h-6V407h6Zm19 19c-10.493 0-19-8.507-19-19h-6c0 13.807 11.193 25 25 25v-6Zm44 0h-44v6h44v-6Zm19-19c0 10.493-8.506 19-19 19v6c13.807 0 25-11.193 25-25h-6Zm0-47v47h6v-47h-6Zm0-31.028V360h6v-31.028h-6Zm7.397-7.027a26.043 26.043 0 0 1-5.845 4.4l2.896 5.255a32.036 32.036 0 0 0 7.192-5.413l-4.243-4.242Zm44.548-44.548-44.548 44.548 4.243 4.242 44.547-44.547-4.242-4.243Zm0-36.77c10.153 10.154 10.153 26.616 0 36.77l4.242 4.243c12.497-12.497 12.497-32.758 0-45.255l-4.242 4.242Zm-32.583-3.403c10.081-6.585 23.732-5.447 32.583 3.403l4.242-4.242c-10.898-10.899-27.697-12.29-40.106-4.184l3.281 5.023Z" />
                <path fill="#000" d="M292.654 245.606a3 3 0 1 1-4.243-4.242l4.243 4.242Zm8.485-8.485-8.485 8.485-4.243-4.242 8.485-8.486 4.243 4.243ZM301.208 254.161a3 3 0 1 1-4.242-4.243l4.242 4.243Zm8.486-8.485-8.486 8.485-4.242-4.243 8.485-8.485 4.243 4.243ZM21.919 246.606a3 3 0 1 0 4.242-4.242l-4.242 4.242Zm-8.486-8.485 8.486 8.485 4.242-4.242-8.485-8.486-4.243 4.243ZM13.364 255.161a3 3 0 1 0 4.243-4.243l-4.243 4.243Zm-8.485-8.485 8.485 8.485 4.243-4.243-8.486-8.485-4.242 4.243Z" />
                <path fill="#FF1E1E" d="M113.322 154.665h88.371v13.25h-88.371z" />
                <path fill="#000" fill-rule="evenodd" d="M225.3 113.481c17.939 14.394 28.018 37.148 28.018 57.504H191.67c-.087-13.669-11.194-24.723-24.883-24.723h-18.56c-13.689 0-24.796 11.054-24.883 24.723H62c0-20.356 10.078-43.11 28.018-57.504C107.957 99.087 132.289 91 157.659 91c25.37 0 49.701 8.087 67.641 22.481Z" clip-rule="evenodd" />
                <circle cx="212.665" cy="197.079" r="8.079" fill="#000" />
                <circle cx="104.079" cy="197.079" r="8.079" fill="#000" />
                <path fill="#000" d="M179.165 211.683c0 8.21-9.868 17.451-20.845 17.451-10.977 0-20.845-9.241-20.845-17.451 0-8.211 9.868-12.281 20.845-12.281 10.977 0 20.845 4.07 20.845 12.281Z" />
                <path stroke="#000" stroke-linecap="round" stroke-width="6" d="M198 417v12M222 417v12M95 417v12M119 417v12" />
                <circle cx="158" cy="143" r="140" fill="url(#c)" stroke="#000" stroke-width="6" />
                <g clip-path="url(#d)">
                  <path fill="#F5D949" stroke="#000" stroke-width="6" d="m217.543 305.943.704 1.692 1.826.146 12.818 1.027h.001a.17.17 0 0 1 .059.011l.002.001a.147.147 0 0 1 .037.065.15.15 0 0 1 .008.075l-.001.002c0 .001-.01.017-.041.044h-.001l-9.765 8.365-1.391 1.192.425 1.782 2.981 12.506h.001c.009.04.008.058.008.06l-.001.002a.148.148 0 0 1-.05.056.146.146 0 0 1-.069.031h-.002c-.002-.001-.02-.005-.054-.026l-10.974-6.702-1.564-.955-1.564.955-10.974 6.702a.177.177 0 0 1-.053.025l-.002.001c-.004-.001-.032-.005-.069-.032a.146.146 0 0 1-.051-.056l-.001-.002s-.001-.018.008-.058l.001-.001 2.981-12.506.425-1.782-1.391-1.192-9.765-8.365h-.001c-.031-.027-.04-.043-.041-.044l-.001-.002a.15.15 0 0 1 .008-.075.147.147 0 0 1 .037-.065l.002-.001a.17.17 0 0 1 .059-.011h.001l12.818-1.027 1.826-.146.704-1.692 4.938-11.875a.161.161 0 0 1 .028-.051l.001-.001a.146.146 0 0 1 .076-.016c.047 0 .072.013.076.016l.001.001c.001 0 .012.013.028.051l4.938 11.875Z" />
                </g>
                <path stroke="#000" stroke-linecap="round" stroke-width="16" d="M56.884 247.116A143.01 143.01 0 0 0 158 289a143.002 143.002 0 0 0 101.116-41.884" />
                <path stroke="#000" stroke-width="6" d="M65.035 404s25.382-6.618 41.965-6.5c17.059.121 43.035 7.5 43.035 7.5M164.012 403.977s25.961-5.606 42.932-5.472C224.402 398.642 251 405 251 405M25 290l7.769-4.072a57.001 57.001 0 0 0 25.067-26.121L62 251M254.363 252l3.867 7.873a57.002 57.002 0 0 0 25.452 25.746l8.694 4.394" />
                <defs>
                  <linearGradient id="a" x1="158" x2="158" y1="0" y2="286" gradientUnits="userSpaceOnUse">
                    <stop offset=".219" />
                    <stop offset="1" stop-color="#fff" />
                  </linearGradient>
                  <linearGradient id="b" x1="254" x2="100" y1="419" y2="325" gradientUnits="userSpaceOnUse">
                    <stop stop-opacity=".98" />
                    <stop offset="1" stop-opacity="0" />
                  </linearGradient>
                  <radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(165.9998 58.9999 -60.6938 170.7657 210 171)" gradientUnits="userSpaceOnUse">
                    <stop offset=".771" stop-color="#D9D9D9" stop-opacity="0" />
                    <stop offset="1" stop-color="#fff" stop-opacity=".63" />
                  </radialGradient>
                  <clipPath id="d">
                    <path fill="#fff" d="M189 291h47v45h-47z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </span>
        </span>
      </button>

      <div className='card-wrapper shadow-md rounded-xl'>
        <div className='relative'>
        <Image src="/nerd.webp" width={50} height={50} />
        </div>
        <h4>Comming Soon !</h4>
        <p>Hey! The website is still under construction.<br />
          We still have to work on it for a bit more time.<br />
          However, if you're so interested we can give you a spoil !</p>

        <div className='flex justify-between items-baseline gap-6 mt-5'>
          <div className="btn-wrapper">
            <span className={bdg1}>don't click me</span>
            <div onMouseOver={triggerhover1} className={`btn1 ${stylebtn1}`}>
              {textbtn1}
            </div>
          </div>
          <div className="btn-wrapper">
            <span className={bdg2} >don't click me</span>
            <div onMouseOver={triggerhover2} className={`btn2 ${stylebtn2}`}>
              {textbtn2}
            </div>

          </div>
        </div>


      </div>
    </main>
  )
}
