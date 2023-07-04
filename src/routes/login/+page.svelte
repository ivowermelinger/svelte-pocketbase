<script lang="ts">
    import type {ActionData} from './$types';
    import { enhance } from '$app/forms';

    export let form: ActionData;

    $: if (form?.success) {
        console.log("success");
    }
</script>
<div class="container">

    <div class="row row-justify-center">
        <div class="gr-24 gr-12@small">
            <h1>Login</h1>
        </div>
    </div>

    <div class="row row-justify-center">
        <div class="gr-24 gr-12@small">
            {#if !form?.success && form?.message}
                <div class="alert alert--error">
                    {form?.message}
                </div>
            {/if}

            <form method="post" class="form" use:enhance>
                <div class="form__group">

                    <label for="user"></label>

                    <input type="text"
                           name="user"
                           id="user"
                           placeholder="Username / Email"
                           value={form?.user ?? ''}
                           required>

                </div>

                <div class="form__group">
                    <label for="password"></label>
                    <input type="password" name="password" id="password" placeholder="Password" required>
                </div>
                <button class="btn">Login</button>
            </form>
        </div>
    </div>
</div>

<style lang="scss">
  .form {
    width: 100%;
    padding: 25px;
    background-color: #eee;
    border-radius: 4px;

    &__group {
      width: 100%;
      display: flex;
      flex-flow: column;
      margin-bottom: 25px;

      label {
        display: block;
        width: 100%;
      }

      input {
        width: 100%;
        border-radius: 4px;
        border: 1px solid #656565;
        padding: 10px 6px;

        &::placeholder {
          opacity: 0.75;
        }


        &:focus {
          border-color: #3185bb;
          outline: none;
        }

        &:required:invalid:not(:focus):not(:placeholder-shown) {
          border-color: #a21e1e;
        }
      }
    }
  }

  .alert {
    padding: 10px;
    margin-bottom: 25px;
    border-radius: 4px;

    &--error {
      background-color: #98373a;
      color: #fff;
    }
  }
</style>
