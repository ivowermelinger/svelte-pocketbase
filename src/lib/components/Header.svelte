<script lang="ts">
    import {page} from '$app/stores';
    import {goto} from "$app/navigation";
    import {enhance} from '$app/forms';

    const handleLogout = async () => {
        const res = await fetch('/api/logout', {method: 'POST'});
        console.log(res);

        goto('/');
    }
</script>

<div class="header">
    <div class="container">
        <div class="row">
            <div class="gr-18">
                <ul class="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/public">Public Route</a></li>
                    {#if $page.data.user}
                        <li><a href="/protected">Protected Route</a></li>
                    {/if}
                </ul>
            </div>

            <div class="gr-6 tar">
                {#if $page.data.user}
                    <a href="/me">Hi {$page.data.user.username}&nbsp;👋&nbsp;</a>
                    <form method="POST" action="/logout" use:enhance>
                        <button type="submit">Logout</button>
                    </form>
                {:else}
                    <a href="/login">Login</a>
                {/if}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  .header {
    position: sticky;
    top: 0;
    left: 0;
    padding: 25px 0;
    background: #eee;
    margin-bottom: 50px;
  }

  .nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0 0 0 1rem;
      padding: 0;
      list-style: none;
    }
  }
</style>
