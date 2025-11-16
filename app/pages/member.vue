<template>
    <div class="page-template page-template-page page-template-login page-template-pagelogin-php page page-id-66">
        <HeadMobile></HeadMobile>
        <Header></Header>
        <FloatingGameMenu></FloatingGameMenu>
        <FloatingContactMenu></FloatingContactMenu>
        <MemberPage />
        <Footer></Footer>
        <FixedFooter></FixedFooter>
        <BackToTop></BackToTop>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'สมาชิก - UFANANCE',
    meta: [
        { name: 'description', content: 'หน้าข้อมูลสมาชิก UFANANCE คาสิโนออนไลน์ บาคาร่า สล็อต แทงบอล' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>
<style scoped>
/* Utility Classes */
.tt_l {
  float: left;
}

.tt_r {
  float: right;
}

.tt_full {
  width: 100%;
}

.center {
  text-align: center;
}

.clear,
.tt_l::after,
.tt_full::after {
  content: '';
  display: table;
  clear: both;
}

/* Wrapper and Layout */
.wrapper-c {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
}

.p_member {
  padding: 40px 0;
}

.title_page h1,
.title_page h2 {
  color: #000;
  font-size: 34px;
  line-height: 34px;
  font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif;
  font-weight: bold;
}

.title_page {
  margin-bottom: 0px;
  margin-top: 0px;
  position: relative;
  padding: 5px 20px 10px 20px;
  border-radius: 0px;
  text-shadow: 1px 1px 0 #fef866;
  background: linear-gradient(rgb(248, 209, 47) 0%, rgb(240, 185, 11) 99.77%);
  text-align: center;
}

.tt_content {
  padding: 20px;
  min-height: 240px;
}

.bg_tr {
  background-color: rgba(0, 0, 0, 0.6);
}

/* Login Form */
.fr_login {
  min-height: 50px;
  padding: 40px 20px 45px 20px;
  width: 100%;
  margin: 20px auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.fr_center {
  width: 70%;
  min-height: 50px;
  margin: 0px auto;
}

.fr_input {
  width: 100%;
}

.tt_fr {
  width: 100%;
  height: 50px;
  border: 2px solid #ddd;
  background-color: #fdfdfd;
  padding: 12px 10px 12px 20px;
  margin: 8px 0px 0px 0px;
  border-radius: 6px;
  font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: #111;
  -webkit-box-shadow: inset 3px 3px 2px 0px rgba(50, 50, 50, 0.15);
  -moz-box-shadow: inset 3px 3px 2px 0px rgba(50, 50, 50, 0.15);
  box-shadow: inset 3px 3px 2px 0px rgba(50, 50, 50, 0.15);
}

.tt_fr:focus {
  outline: none;
  border-color: #f3c31a;
  box-shadow: 0 0 0 3px rgba(243, 195, 26, 0.25);
}

.fr_submit {
  width: 100%;
  text-align: center;
  height: 70px;
  font-weight: bold;
  margin: 15px 0px 0px 0px;
  color: #fff;
  font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif;
  border-radius: 5px;
  font-size: 26px;
  line-height: 34px;
  cursor: pointer;
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.25);
  background: linear-gradient(90deg, rgba(177, 9, 4, 1) 0%, rgba(242, 23, 1, 1) 100%);
  border: 1px solid #ee1601;
  text-shadow: 0px 1px 0px #481713;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.fr_submit:hover {
  background: linear-gradient(90deg, #df1f1f 0%, #ff4f38 100%);
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .fr_center {
    width: 85%;
  }
}

@media screen and (max-width: 800px) {
  .fr_login {
    padding: 30px 10px 35px 10px;
  }

  .fr_center {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .title_page h1,
  .title_page h2 {
    font-size: 24px;
    line-height: 24px;
  }
}

/* LINE Login Button Styles */
.btn-success-line {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    height: 48px;
    background-color: #00b900;
    border-color: #00b900;
    border-radius: 5px;
    padding-left: 47px;
    cursor: pointer;
    margin-top: 0.25rem !important;
    display: block;
    width: 100%;
    color: #fff;
    position: relative;
}

.btn-success-line:hover {
    background-color: #009900;
    border-color: #009900;
}

#btn-linelogin:before {
    position: absolute;
    font-family: 'Font Awesome 5 Brands';
    content: '\f3c0';
    margin-left: -41px;
    font-size: 36px;
    top: -4px;
}

#linelogin-c {
    display: block;
    position: relative;
    height: 50px;
}

#linelogin-c:before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    border-top: 1px solid #151515;
}

#linelogin-c::after {
    color: black;
    text-align: center !important;
    font-size: 18px;
    content: 'หรือ';
    position: absolute;
    width: 80px;
    left: calc(50% - 40px);
    height: 100%;
    line-height: 300%;
    background-color: white;
}
</style>