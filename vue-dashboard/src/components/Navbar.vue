<template>
    <nav class="navbar has-shadow">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="../assets/logo.png">
            </a>
            <div class="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <small>your ulp belts</small>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">Juna</div>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            <div> <span class="icon is-small">
                            <i class="fa fa-usd"></i>
                                </span>Profile
                            </div>
                        </a>
                        <a class="navbar-item">
                            <div>
                                <span class="icon is-small">
                                    <i class="fa fa-bug"></i>
                                </span>Report
                            </div>
                        </a>
                        <a class="navbar-item">
                            <div>
                                <span class="icon is-small">
                                    <i class="fa fa-sign-out"></i>
                                </span> Sign Out
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>