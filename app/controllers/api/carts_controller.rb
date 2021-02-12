class Api::CartsController < ApplicationController
  def edit
    if (logged_in?)
      Cart.create!(owner_id: current_user.id) if (!current_user.cart)
      current_user.cart.update(carts_params)
    end
  end

  def show
    debugger
    if (logged_in?)
      Cart.create!(owner_id: current_user.id) if (!current_user.cart)
      debugger
      @cart = current_user.cart
      render 'show'
    else
      render json: { error: 'Invalid username or password'}
    end
  end

  private

  def carts_params
    params.require(:cart).permit(:owner_id, :ordered, :contents)
  end
end