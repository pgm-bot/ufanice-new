<template>
    <div class="wrapper-c">
        <div class="tt_l tt_full p_member">
            <div id="ct_from" class="tt_l tt_full title_page">
                <h1>เข้าสู่ระบบ</h1>
            </div>
            <div class="tt_l tt_full tt_content bg_tr">
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full">
                        <!--- if not login--->
                        <div class="tt_l tt_full fr_login fr_login_form" id="fr_login_form">
                            <div class="fr_center">
                                <a style="displayxx: none;padding-top: 10px;" href="../../line.me/login_uselib.php"
                                    class="  btn-success-line " type="button" id="btn-linelogin">เข้าสู่ระบบด้วย
                                    LINE</a>
                                <div style="displaxx: none;" id="linelogin-c"></div>
                                <form id="loginform" class="" action="../../../api.php" method="POST">
                                    <div class="tt_l fr_input">
                                        <input id="phone" class="form-control tt_fr" maxlength="10" name="phone"
                                            type="text" placeholder="กรอกเบอร์โทรศัพท์">
                                        <input id="password" class="form-control tt_fr" maxlength="24" name="password"
                                            type="password" placeholder="กรอกรหัสผ่าน">
                                    </div>
                                    <input type="hidden" name="task" value="login">
                                    <button class="tt_r fr_submit" type="submit"><i class="fas fa-sign-in-alt"></i>
                                        เข้าสู่ระบบ</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* ========================================
   CSS สำหรับ LoginForm - จาก css.css
   ======================================== */

/* 1. Utility Classes */
.tt_l {
    float: left;
}

.tt_r {
    float: right;
}

.tt_full {
    width: 100%;
}

.bg_tr {
    background-color: rgba(0, 0, 0, 0.6);
}

/* 2. Layout Wrapper */
.wrapper-c {
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
}

.p_member {
    padding: 40px 0;
}

/* 3. Page Title */
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

.title_page h1,
.title_page h2 {
    color: #000;
    font-size: 34px;
    line-height: 34px;
    font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif;
    font-weight: bold;
}

.title_page a {
    color: #000;
    text-shadow: 1px 1px 0 #ecb63a;
}

/* 4. Content Section */
.tt_content {
    padding: 20px;
    min-height: 240px;
}

/* 5. Login Form Container */
.fr_login {
    min-height: 50px;
    padding: 40px 20px 45px 20px;
    width: 100%;
    margin: 20px auto;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

#fr_login_user_form.fr_login {
    margin-top: 0px;
    padding: 30px 20px 45px 20px;
}

.fr_login_form {
    margin: 0 auto;
}

/* 6. Form Layout */
.fr_center {
    width: 70%;
    min-height: 50px;
    margin: 0px auto;
}

.fr_input {
    width: 70%;
}

/* 7. Input Fields */
.tt_fr {
    width: 100%;
    height: 38px;
    border: 2px solid #ddd;
    background-color: #fdfdfd;
    padding: 7px 10px 7px 20px;
    margin: 5px 0px 0px 0px;
    border-radius: 5px;
    font-family: thaisanslite_r1;
    font-size: 18px;
    line-height: 18px;
    -webkit-box-shadow: inset 3px 3px 2px 0px rgba(50, 50, 50, 0.25);
    -moz-box-shadow: inset 3px 3px 2px 0px rgba(50, 50, 50, 0.25);
    box-shadow: inset 3px 3px 2px 0px rgba(50, 50, 50, 0.25);
}

.tt_fr:focus {
    outline: none;
    border-color: #f3c31a;
    box-shadow: 0 0 0 3px rgba(243, 195, 26, 0.25);
}

.form-control {
    display: block;
    width: 100%;
}

/* 8. Submit Button */
.fr_submit {
    text-align: center;
    height: 80px;
    font-weight: bold;
    margin: 5px 0px 0px 0px;
    color: #fff;
    font-family: thaisanslite_r1;
    border-radius: 5px;
    font-size: 26px;
    line-height: 34px;
    cursor: pointer;
    box-shadow: inset 0px 1px 0px 0px #ff3019;
    background: linear-gradient(90deg, rgba(177, 9, 4, 1) 0%, rgba(242, 23, 1, 1) 100%);
    border: 1px solid #ee1601;
    text-shadow: 0px 1px 0px #481713;
    border-radius: 4px;
}
.fr_submit {
    width: 28%;
}

.fr_submit:hover {
    background: linear-gradient(90deg, #df1f1f 0%, #ff4f38 100%);
}

/* 9. Form Link */
.fr_link {
    text-align: right;
    font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif;
    font-size: 18px;
    line-height: 18px;
    color: #f5f5f5;
    margin: 10px 0px 0px 0px;
}

.fr_link a {
    color: #f5f5f5;
    display: inline-block;
}

.tx_frl {
    font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif;
    font-size: 22px;
    line-height: 22px;
    margin: 10px 0px 0px 0px;
}

/* 10. LINE Login Button */
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
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
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

/* 11. LINE Login Divider */
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

/* 12. SweetAlert2 */
.swal2-container {
    z-index: 99999999;
}

/* 13. Form Element */
form {
    display: block;
    margin-top: 0em;
    unicode-bidi: isolate;
    margin-block-end: 1em;
}

/* ========================================
   Responsive Design
   ======================================== */

/* For tablets (max-width: 1024px) */
@media screen and (max-width: 1024px) {
    .fr_center {
        width: 85%;
    }
}

/* For mobile (max-width: 620px) */
@media screen and (max-width: 620px) {
    .fr_center {
        width: 95%;
    }

    .fr_input {
        width: 100%;
    }

    .fr_submit {
        width: 100%;
        height: 50px;
        font-size: 22px;
    }

    .fr_link {
        text-align: center;
    }

    .title_page h1,
    .title_page h2 {
        font-size: 24px;
        line-height: 24px;
    }
}

/* For very small mobile (max-width: 480px) */
@media screen and (max-width: 480px) {

    .title_page h1,
    .title_page h2 {
        font-size: 20px;
        line-height: 20px;
    }

    .fr_submit {
        height: 28%;
        font-size: 20px;
    }
}
</style>