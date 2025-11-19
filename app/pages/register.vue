<template>
    <div class="page-template page-template-page page-template-register page-template-pageregister-php page page-id-24">
        <HeadMobile />
        <Header />
        <FloatingGameMenu />
        <FloatingContactMenu />
        <div class="wrapper-c">
            <div class="tt_l tt_full p_gl">
                <div id="ct_from" class="tt_l tt_full title_page">
                    <h1>สมัครสมาชิก</h1>
                </div>
                <div class="tt_l tt_full tt_content bg">
                    <div class="tt_l tt_full">
                        <div class="tt_l tt_full">
                            <div class="thaitheme_read">
                            </div>

                            <div class="tt_l fr_login register_ft">
                                <div class="fr_center">
                                    <div class="tt_l tt_full fr_h1">สมัครสมาชิกเพื่อเข้าเล่นคาสิโนออนไลน์ ที่เว็บไซต์
                                        UFANANCE.COM</div>

                                    <form id="registerform" class="tt_l tt_full fr_re" @submit.prevent="handleRegister">
                                        <!-- Phone Number -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l fr_tx2x"><i class="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                            <input v-model="form.phone" required class="form-control tt_bk"
                                                minlength="10" maxlength="10" name="user" type="text"
                                                placeholder="เบอร์โทรศัพท์" size="10">
                                        </div>

                                        <!-- Password -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l tt_full fr_tx2x"><i class="fa fa-key"
                                                    aria-hidden="true"></i>
                                            </div>
                                            <input v-model="form.password" id="pass" required class="form-control tt_bk"
                                                name="password" type="password" placeholder="ตั้งรหัสผ่าน">
                                        </div>

                                        <!-- Confirm Password -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l tt_full fr_tx2x fr_txx">ยืนยันรหัสผ่าน</div>
                                            <input v-model="form.confirmPassword" id="cm_pass"
                                                class="form-control tt_bk fr_ixx" type="password"
                                                placeholder="ยืนยันรหัสผ่านเดิมอีกครั้ง">
                                        </div>

                                        <!-- Full Name -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l tt_full fr_tx2x"><i class="fa fa-user"
                                                    aria-hidden="true"></i>
                                            </div>
                                            <input v-model="form.fullName" required class="form-control tt_bk" id="name"
                                                name="name" placeholder="ชื่อ นามสกุล">
                                        </div>
                                        <div class="tt_l tt_full fr_sec_tx">
                                            ชื่อบัญชีฝาก ต้องตรงกับบัญชีถอน ต้องภาษาไทยเท่านั้น
                                            ไม่เช่นนั้นจะถอนเงินไม่ได้
                                        </div>

                                        <!-- Bank Selection -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l tt_full fr_tx2x"><i class="fa fa-university"
                                                    aria-hidden="true"></i></div>
                                            <select v-model="form.bankType" required class="fr_sc" name="banktype">
                                                <option value="0">ธนาคาร กสิกรไทย จำกัด (มหาชน)</option>
                                                <option value="2">ธนาคาร กรุงเทพ จำกัด (มหาชน)</option>
                                                <option value="4">ธนาคาร กรุงไทย จำกัด (มหาชน)</option>
                                                <option value="19">ธนาคาร กรุงศรีอยุธยา จำกัด (มหาชน)</option>
                                                <option value="120">ธนาคาร เกียรตินาคิน จำกัด (มหาชน)</option>
                                                <option value="6">ธนาคาร เจพีมอร์แกน เชส สาขากรุงเทพฯ</option>
                                                <option value="12">ธนาคาร ซิตี้แบ้งค์</option>
                                                <option value="17">ธนาคาร ซีไอเอ็มบี ไทย จำกัด (มหาชน)</option>
                                                <option value="123">ธนาคารซูมิโตโม มิตซุย ทรัสต์ (ไทย) จำกัด (มหาชน)
                                                </option>
                                                <option value="31">ธนาคาร ซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น</option>
                                                <option value="26">ธนาคาร ดอยซ์แบงก็</option>
                                                <option value="8">ธนาคาร ทหารไทยธนชาต จำกัด (มหาชน)</option>
                                                <option value="100">ธนาคาร ทิสโก้ จำกัด (มหาชน)</option>
                                                <option value="104">ธนาคาร ไทยเครดิต เพื่อรายย่อย</option>
                                                <option value="10">ธนาคาร ไทยพาณิชย์ จำกัด (มหาชน)</option>
                                                <option value="117">ธนาคารบีเอ็นพี พารีบาส์ สาขากรุงเทพฯ</option>
                                                <option value="119">ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร</option>
                                                <option value="28">ธนาคาร มิซูโฮ คอร์ปอเรต จำกัด สาขากรุงเทพฯ</option>
                                                <option value="20">ธนาคาร เมกะ สากลพาณิชย์ จำกัด (มหาชน)</option>
                                                <option value="18">ธนาคาร ยูโอบี จำกัด (มหาชน)</option>
                                                <option value="111">ธนาคาร แลนด์ แอนด์ เฮ้าส์</option>
                                                <option value="122">ธนาคาร สแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน)
                                                </option>
                                                <option value="121">ธนาคารแห่งประเทศจีน (ไทย)</option>
                                                <option value="21">ธนาคาร แห่งอเมริกาฯ</option>
                                                <option value="24">ธนาคาร ออมสิน</option>
                                                <option value="27">ธนาคาร อาคารสงเคราะห์</option>
                                                <option value="118">ธนาคารอิสลามแห่งประเทศไทย</option>
                                                <option value="105">ธนาคาร ไอซีบีซี (ไทย) จำกัด (มหาชน)</option>
                                                <option value="25">ธนาคาร ฮ่องกงและเซี่ยงไฮ้ จำกัด</option>
                                            </select>
                                        </div>

                                        <!-- Bank Account Number -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l tt_full fr_tx2x"><i class="fa fa-credit-card"
                                                    aria-hidden="true"></i></div>
                                            <input v-model="form.accountNumber" class="form-control tt_bk" required
                                                id="account" name="account" type="text"
                                                placeholder="เลขบัญชีธนาคารของท่าน">
                                        </div>

                                        <!-- LINE ID -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l tt_full fr_tx2x"><img
                                                    src="https://ufanance12.com/wp-content/themes/ufanance.com/images/fr-kine.jpg?v=1.2">
                                            </div>
                                            <input v-model="form.lineId" class="form-control tt_bk" required id="lineid"
                                                name="lineid" type="text" placeholder="LINE ID (ถ้าไม่มีใส่เบอร์โทร)">
                                        </div>

                                        <!-- Referral Source -->
                                        <div class="tt_l tt_full fr_sec">
                                            <div class="tt_l tt_full fr_tx2x"><i class="fa fa-university"
                                                    aria-hidden="true"></i></div>
                                            <select v-model="form.referralSource" class="fr_sc" required name="refer">
                                                <option value="ไม่ระบุ">ไม่ระบุเจอเว็บเราจากช่องทางไหน</option>
                                                <option value="google">google</option>
                                                <option value="facebook">facebook</option>
                                                <option value="เว็บไซต์ติดแบนเนอร์">เว็บไซต์ติดแบนเนอร์</option>
                                                <option value="เพื่อนแนะนำ">เพื่อนแนะนำ</option>
                                            </select>
                                        </div>

                                        <div class="tt_l tt_full fr_sec_tx">
                                            หลังจากท่านสมัครสมาชิกกับเราแล้ว ท่านสามารถเข้าสู่ระบบและฝากเงินได้เอง
                                            ผ่านระบบ AUTO โดยท่านไม่ต้องส่งสลิปแจ้งทีมงานเลย
                                            ฝากปุ๊บเข้าปั๊บทันที..ระบบอัติโนมัติฝาก-ถอน 30วินาที
                                            เท่านั้น!แทงบอลออนไลน์
                                        </div>

                                        <button class="tt_l tt_ful fr_submit_bk" type="submit">ยืนยันสมัคร </button>
                                        <input type="hidden" class="affrom affck7" id="aff" name="aff" value="">
                                        <input type="hidden" name="task" value="register">
                                    </form>
                                </div>
                            </div>

                            <div class="tt_l fr_repage">
                                <div class="video_if">
                                    <iframe width="560" height="315"
                                        src="https://googles.video/c2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1l/สมัครสมาชิก_ufanance.mp4"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen=""></iframe>
                                </div>
                                <div class="tt_l tt_ful mt-10">
                                    <img src="https://ufanance12.com/wp-content/uploads/2022/08/howto.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <FixedFooter />
        <BackToTop />
    </div>
</template>

<script setup lang="ts">
interface RegisterForm {
    phone: string
    password: string
    confirmPassword: string
    fullName: string
    bankType: string
    accountNumber: string
    lineId: string
    referralSource: string
}

const form = ref<RegisterForm>({
    phone: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    bankType: '0',
    accountNumber: '',
    lineId: '',
    referralSource: 'ไม่ระบุ'
})

const handleRegister = () => {
    // Validate password match
    if (form.value.password !== form.value.confirmPassword) {
        if (process.client) {
            alert('รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง')
        }
        return
    }

    // Validate phone number
    if (form.value.phone.length !== 10) {
        if (process.client) {
            alert('กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก')
        }
        return
    }

    console.log('Register form:', form.value)

    // TODO: Implement actual registration API call
    if (process.client) {
        alert('ระบบจะเปิดให้บริการเร็วๆ นี้')
    }
}

useHead({
    title: 'สมัครสมาชิก - UFANANCE',
    meta: [
        { name: 'description', content: 'สมัครสมาชิกเพื่อเข้าเล่นคาสิโนออนไลน์ที่ UFANANCE' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>
<style scoped>
.page-template-register .fr_login {
    padding-top: 0px;
}

.register_ft {
    width: 55%;
}

.page-template-register .fr_center {
    width: 100%;
}

.fr_repage {
    width: 43%;
    padding: 30px 0px 0px 20px;
    text-align: center;
}

.video_if {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
}

.video_if iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>