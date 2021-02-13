class Api::CartsController < ApplicationController
  def update
    user = User.find(params[:user_id])
    Cart.create!(owner_id: user.id, contents: [], ordered: false) if !(Cart.find_by(owner_id: user.id))
    debugger
    user.cart.update(carts_params)
  end

  def show
    user = User.find(params[:user_id])
    Cart.create!(owner_id: user.id, contents: [], ordered: false) if !(Cart.find_by(owner_id: user.id))
    @cart = user.cart
    render 'show'
  end

  private

  def carts_params
    params.require(:cart).permit(:owner_id, :ordered, contents: [])
  end
end